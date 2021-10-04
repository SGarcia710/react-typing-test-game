type State = {
  text: string;
  input: string;
  characters: number;
  seconds: number;
  timerId?: number;
};

type Reducer<T = any> = (state: State, payload?: T) => State;
