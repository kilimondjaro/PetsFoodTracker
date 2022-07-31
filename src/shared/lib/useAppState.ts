import { useEffect, useRef } from 'react';
import type { AppStateStatus } from 'react-native';
import { AppState } from 'react-native';

export const useAppState = (onStateChange: (state: AppStateStatus) => void) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (newState) => {
      if (appState.current === newState) {
        return;
      }

      appState.current = newState;
      onStateChange(newState);
    });

    return () => subscription.remove();
  });
};
