import React from 'react';
import { useTyping } from 'src/state/context';

const words = (chars: number) => chars / 5;
const minutes = (seconds: number) => seconds / 60;

const wpm = (words: number, minute: number) => Math.round(words / minute) || 0;

const SpeedInfo = () => {
  const {
    state: { characters, seconds },
  } = useTyping();
  return (
    <>
      <p className="">Typing Speed</p>
      <p>Time: {seconds}</p>
      <p>WPM: {wpm(words(characters), minutes(seconds))}</p>
      <p>Correct characters: {characters}</p>
    </>
  );
};

export default SpeedInfo;
