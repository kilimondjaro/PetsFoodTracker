import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Box } from 'src/shared/ui/box';

import type { LinearGradientProps } from './types';

export const LinearGradient = ({
  children,
  gradientColors,
}: LinearGradientProps) => (
  <MaskedView
    style={styles.maskedView}
    maskElement={
      <Box flex={1} justifyContent="center" alignItems="center">
        {children}
      </Box>
    }
  >
    <ExpoLinearGradient
      colors={gradientColors}
      start={{ x: 1, y: 1 }}
      end={{ x: 0.3, y: 0.33 }}
      style={styles.linearGradient}
    />
  </MaskedView>
);

const styles = StyleSheet.create({
  maskedView: {
    height: '100%',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
