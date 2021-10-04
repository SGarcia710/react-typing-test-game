import {
  createContext,
  Dispatch,
  FunctionComponent,
  useContext,
  useReducer,
} from 'react';

import { Action, ActionTypes, initialState, reducer } from './state';

export const typingContext = createContext<[State, Dispatch<Action<any>>]>([
  initialState,
  () => {},
]);

export const TypingProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <typingContext.Provider value={[state, dispatch]}>
      {children}
    </typingContext.Provider>
  );
};

export const useTyping = () => {
  const [state, dispatch] = useContext(typingContext);

  const onInput = (value: string) => {
    if (!state.timerId) {
      startTimer();
    }
    if (value.length === state.text.length && state.timerId) {
      stopTimer();
    }
    dispatch({
      type: ActionTypes.CHANGE_INPUT,
      payload: value,
    });
  };

  const startTimer = () => {
    const timerId = setInterval(
      () => dispatch({ type: ActionTypes.TICK }),
      1000
    );
    dispatch({ type: ActionTypes.SET_TIMER, payload: timerId });
  };

  const stopTimer = () => {
    clearInterval(state.timerId);
    dispatch({ type: ActionTypes.SET_TIMER, payload: undefined });
  };

  return { state, onInput };
};
