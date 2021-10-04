import { FunctionComponent } from 'react';
import { useTyping } from 'src/state/context';

const UserInput: FunctionComponent = () => {
  const {
    state: { input },
    onInput,
  } = useTyping();
  return (
    <textarea
      value={input}
      onChange={(e) => onInput(e.target.value)}
    ></textarea>
  );
};

export default UserInput;
