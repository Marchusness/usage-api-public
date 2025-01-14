import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { createTypeAlias, zodToTs, printNode } from 'zod-to-ts';

const AUTO_GENERATED_COMMENT = "// AUTO-GENERATED"

// Configuration
const SCHEMAS_DIR = path.resolve('./src/schemas');
const TYPES_DIR = path.resolve('./src/types');

function mkdirAndWriteFile(filePath: string, content: string) {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
}

function getFilePathsWithFileName({
    basePath,
    fileName
}: {
    basePath: string,
    fileName: string
}) {
    const files = fs.readdirSync(basePath, {
        withFileTypes: true,
        recursive: true
    });

    return files.filter(file => file.isFile() && file.name === fileName).map((file) => ({
        completePath: path.join(file.parentPath, file.name),
        pathFromBase: file.parentPath.replace(basePath, '')
    }))
}

function getSchema(filePath: string) {
    const schemaModule = require(filePath);
    const schema = schemaModule.default;
    return schema;
}

function routeToRouteName(routePath: string) {
    return routePath
        .split(/[/-]/)
        .filter(Boolean) // Remove empty strings from leading/trailing slashes
        .map((part, index) => {
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        })
        .join('');
}

const convertCommentsToMultiline = (text: string, lineLength: number = 100) => {
    // Split the text into lines
    return text.split('\n').map(line => {
        // Check if this line contains a comment
        const commentMatch = line.match(/^(\s*\/\*\*|\s*\*|\s*\/\/)(.*)\*\/\s*$/);
        if (!commentMatch) return line;

        const [, indent, comment] = commentMatch;
        const trimmedComment = comment.trim();
        
        // If it's a single-line comment and short enough, return it unchanged
        if (indent.includes('//') && (indent.length + trimmedComment.length <= lineLength)) {
            return '\n' + line;
        }

        // Split the comment into words
        const words = trimmedComment.split(/\s+/);
        let currentLine = '';
        const wrappedLines: string[] = [];

        // Build new lines keeping track of length
        words.forEach(word => {
            if (currentLine.length + word.length + 1 <= lineLength - indent.length) {
                currentLine += (currentLine ? ' ' : '') + word;
            } else {
                wrappedLines.push(currentLine);
                currentLine = word;
            }
        });
        if (currentLine) {
            wrappedLines.push(currentLine);
        }

        // Format the wrapped lines with proper comment syntax
        if (indent.includes('/**')) {
            // For JSDoc comments
            const baseIndent = indent.replace('/**', '');
            return [
                '\n' + indent, // Opening /** on its own line
                ...wrappedLines.map(l => `${baseIndent} * ${l}`),
                `${baseIndent} */` // Closing */ on its own line
            ].join('\n');
        } else if (indent.includes('//')) {
            // For single-line comments
            return '\n' + wrappedLines
                .map(l => `${indent}${l}`)
                .join('\n');
        }

        return line;
    }).join('\n');
};

function generateTypeForSchema(schema: z.ZodType, RouteName: string, route: string) {
    const TypeName = RouteName + "Request"
    const { node } = zodToTs(schema, TypeName);
    const typeAlias = createTypeAlias(node, TypeName);
    const typeString = convertCommentsToMultiline(printNode(typeAlias))
    const typeDefinition = `${AUTO_GENERATED_COMMENT}\n\n// JSON Request format for route "${route}"\n\nexport ${typeString}`;

    return typeDefinition;
}

function generateRouteToRequestMapping({
    routes,
}: {
    routes: string[]
}) {
    let output = `${AUTO_GENERATED_COMMENT}\n\n`

    routes.forEach((route) => {
        output += `import { ${routeToRouteName(route)}Request } from '.${route}/request';\n`
        output += `import { ${routeToRouteName(route)}Response } from '.${route}/response';\n`
    })
    
    output += `\n\n`

    output += `export type RouteToRequestResponse = {`

    routes.forEach((route) => {
        output += `
    "${route}": {
        Request: ${routeToRouteName(route)}Request,
        Response: ${routeToRouteName(route)}Response,
    },`
    })

    output += `\n}\n`

    output += `\n\n`

    output += `export {
    ${routes.map((route) => `${routeToRouteName(route)}Request`).join(`,
    `)},
    ${routes.map((route) => `${routeToRouteName(route)}Response`).join(`,
    `)},
}`

    return output
}

function generateSchemasIndexFile(routes: string[]) {
    let output = `${AUTO_GENERATED_COMMENT}\n\n`

    routes.forEach((route) => {
        output += `import ${routeToRouteName(route)}Schema from '.${route}/schema';\n`
    })

    output += `\n`

    output += `export {
    ${routes.map((route) => `${routeToRouteName(route)}Schema`).join(`,
    `)},
}`

    return output
}

// Generate types for all routes
function generateTypesForRoutes() {

    const schemaFiles = getFilePathsWithFileName({
        basePath: SCHEMAS_DIR,
        fileName: 'schema.ts'
    });

    schemaFiles.forEach((schemaFile) => {
        const schema = getSchema(schemaFile.completePath);
        const route = schemaFile.pathFromBase

        const routeName = routeToRouteName(route);
        const typeDefinition = generateTypeForSchema(schema, routeName, route);

        const outputPath = path.join(TYPES_DIR, route, 'request.ts');
        mkdirAndWriteFile(outputPath, typeDefinition);
    })

    const output = generateRouteToRequestMapping({
        routes: schemaFiles.map((schemaFile) => schemaFile.pathFromBase)
    })

    mkdirAndWriteFile(path.join(TYPES_DIR, 'routeToRequestMapping.ts'), output)

    const schemasIndexFile = generateSchemasIndexFile(schemaFiles.map((schemaFile) => schemaFile.pathFromBase))
    mkdirAndWriteFile(path.join(SCHEMAS_DIR, 'index.ts'), schemasIndexFile)
}

// Main function
function run() {
  generateTypesForRoutes();
}

// Execute the script
run();