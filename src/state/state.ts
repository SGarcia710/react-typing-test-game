import { countCorrectCharacters } from 'src/utils';

export const initialState: State = {
  text: 'just some text',
  input: '',
  characters: 0,
  seconds: 0,
  timerId: undefined,
};

export enum ActionTypes {
  CHANGE_INPUT,
  SET_TIMER,
  TICK,
}

export type Action<T> = {
  type: ActionTypes;
  payload?: T;
};

type Transducer = (state: State, action: Action<any>) => State;

export const changeInput: Reducer<string> = (state, input = '') => {
  return {
    ...state,
    input,
    characters: countCorrectCharacters(state.text, state.input),
  };
};

export const setTimer: Reducer<number> = (state, timerId) => ({
  ...state,
  timerId,
});
export const tick: Reducer = (state) => ({
  ...state,
  seconds: state.seconds + 1,
});

export const reducer: Transducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return changeInput(state, action.payload);
    case ActionTypes.SET_TIMER:
      return setTimer(state, action.payload);
    case ActionTypes.TICK:
      return tick(state);
    default:
      return state;
  }
};
