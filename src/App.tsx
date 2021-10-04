import UserInput from './components/UserInput';
import Preview from './components/Preview';
import { TypingProvider } from './state/context';
import SpeedInfo from './components/SpeedInfo';

function App() {
  return (
    <>
      <h1>Typing speed test</h1>
      <div className="container">
        <TypingProvider>
          <div className="typing-test">
            <Preview />
            <UserInput />
          </div>
          <div className="typing-speed">
            <SpeedInfo />
          </div>
        </TypingProvider>
      </div>
    </>
  );
}

export default App;
