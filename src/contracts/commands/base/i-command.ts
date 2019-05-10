
export interface ICommand<TInput, TOutput> {
    execute(TInput):TOutput;
}