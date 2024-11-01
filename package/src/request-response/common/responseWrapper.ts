
export type ResponseWrapper<T> = ({
    success: true;
  } & T) | {
    success: false;
    message: string;
    debugMessage?: string;
  }