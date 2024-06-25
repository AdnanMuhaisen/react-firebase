export interface ICommand<Input, Output = void> {
  execute(input: Input): Promise<Output>;
}
