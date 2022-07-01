import { ImpactFeedbackStyle } from 'expo-haptics';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from 'react-native';

import type { TouchableProps } from './types';

export const Touchable = ({
  children,
  feedback = ImpactFeedbackStyle.Medium,
  onPress,
}: TouchableProps) => (
  <TouchableOpacity
    onPress={() => {
      void Haptics.impactAsync(feedback);
      onPress();
    }}
  >
    {children}
  </TouchableOpacity>
);
