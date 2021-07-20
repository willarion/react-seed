import React from 'react';

export const useInputValue = (): {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [input, setInput] = React.useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, handleInput };
};
