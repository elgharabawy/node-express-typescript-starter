interface ServiceAPIResponse<T> {
  body: T;
  statusCode: number;
  headers?: Object;
}

export { ServiceAPIResponse }
