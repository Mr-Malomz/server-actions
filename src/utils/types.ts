export type FormResponseType =
    | { type: 'initial' }
    | { type: 'error'; message: string }
    | { type: 'success'; message: string };
