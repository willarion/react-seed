import { useState } from 'react';

export const useLoading = (): {
  isLoading: boolean;
  handleLoading: (flag: boolean) => void;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLoading = (flag: boolean) => {
    setIsLoading(flag);
  };

  return { isLoading, handleLoading };
};
