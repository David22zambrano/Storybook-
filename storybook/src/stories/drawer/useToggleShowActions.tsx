import { useState, useCallback } from 'react';

const useToggleShowActions = (initialState: boolean = false) => {
  const [showActions, setShowActions] = useState(initialState);

  const toggleShowActions = useCallback(() => {
    setShowActions((prev) => !prev);
  }, []);

  return { showActions, toggleShowActions };
};

export default useToggleShowActions;
