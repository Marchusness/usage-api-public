export type ErrorResponseMap = {
  error: {
      message: string;
      debugMessage?: string;
  };
  invalidInput: {
      message: string;
      debugMessage?: string;
  }
}

export type ResponseWrapper<StatusToData extends Record<string, Object>> = ({
  [Status in keyof (StatusToData & ErrorResponseMap)]: {
    status: Status;
    data: (StatusToData & ErrorResponseMap)[Status];
  }
}[keyof (StatusToData & ErrorResponseMap)]) ;