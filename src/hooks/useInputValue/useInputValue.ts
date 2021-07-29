import React from 'react';
import { useSearchParams } from '../useSearchParams/useSearchParams';

export const useInputValue = (): {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
} => {
  const initialValue = useSearchParams().search?.toString() || '';
  const [input, setInput] = React.useState(initialValue);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const resetInput = () => {
    setInput('');
  };

  return { input, handleInput, resetInput };
};
