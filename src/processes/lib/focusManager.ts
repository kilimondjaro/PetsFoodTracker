import { focusManager } from '@tanstack/react-query';
import { AppState } from 'react-native';

export const enableFocusManger = () => {
  focusManager.setEventListener((handleFocus) => {
    const subscription = AppState.addEventListener('change', (state) => {
      handleFocus(state === 'active');
    });

    return () => {
      subscription.remove();
    };
  });
};
