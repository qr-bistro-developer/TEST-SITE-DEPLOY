import { useState, useCallback } from 'react';

export const useRequesting = () => {
  const [isRequesting, setIsRequesting] = useState(false);

  const startRequest = useCallback(() => setIsRequesting(true), []);
  const endRequest = useCallback(() => setIsRequesting(false), []);

  return {
    isRequesting,
    startRequest,
    endRequest,
  };
};
