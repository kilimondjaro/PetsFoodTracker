import { useTheme } from '@shopify/restyle';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';
import { Box } from 'src/shared/ui/box';
import type { Theme } from 'src/shared/ui/theme/types';

import type { TextInputProps } from './types';

export const TextInput = (props: TextInputProps) => {
  const theme = useTheme<Theme>();

  return (
    <Box
      backgroundColor="textInputBackground"
      height={60}
      paddingHorizontal="m"
      borderRadius="s"
    >
      <RNTextInput
        style={[styles.textInput, theme.textVariants.text]}
        {...props}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
});
