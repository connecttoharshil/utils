export type Outcome<T, E = Error> = [data: T, error: null] | [data: null, error: E];

export type AwaitedOutcome<T, E = Error> = Promise<Outcome<T, E>>;
