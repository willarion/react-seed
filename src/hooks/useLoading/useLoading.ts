import { useCallback, useState } from 'react';

export const useLoading = (): {
  isLoading: boolean;
  handleLoading: (flag: boolean) => void;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLoading = useCallback((flag: boolean) => {
    setIsLoading(flag);
  }, []);

  return { isLoading, handleLoading };
};
