export type Outcome<T, E = Error> = [data: T, error: null] | [data: null, error: E];
