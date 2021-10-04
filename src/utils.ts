const countCorrectCharacters = (text: string, input: string) => {
  const textChars = text.replace(' ', '');
  const inputChars = text.replace(' ', '');
  return inputChars.split('').filter((char, i) => char === textChars[i]).length;
};

export { countCorrectCharacters };
