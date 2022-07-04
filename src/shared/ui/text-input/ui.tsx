import { useTheme } from '@shopify/restyle';
import { result } from 'lodash';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';
import { Box } from 'src/shared/ui/box';
import type { Theme } from 'src/shared/ui/theme/types';

import type { TextInputProps } from './types';

export const TextInput = <T extends number | string>({
  type = 'string',
  onChangeText,
  value,
  ...props
}: TextInputProps<T>) => {
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
        value={value?.toString()}
        onChangeText={(text) => {
          const result = type === 'number' ? parseInt(text) : text;
          onChangeText(result as T);
        }}
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
