import { useState, useCallback } from 'react';

export function useDialog(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const show = useCallback(() => setIsOpen(true), []);
  const hide = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((state) => !state), []);

  return {
    isOpen,
    show,
    hide,
    toggle,
  };
}