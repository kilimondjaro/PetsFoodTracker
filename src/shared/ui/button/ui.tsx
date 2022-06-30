import { useTheme } from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { LinearGradient } from 'src/shared/ui/linear-gradient';
import { Text } from 'src/shared/ui/text';
import type { Theme } from 'src/shared/ui/theme/types';

import type { ButtonProps } from './types';

export const Button = ({ onPress, title }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const { primaryGradient1, primaryGradient2 } = theme.colors;

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        height={50}
        width={140}
        borderRadius="button"
        backgroundColor="buttonBackground"
        shadowOpacity={0.1}
        shadowRadius={8}
      >
        <LinearGradient gradientColors={[primaryGradient1, primaryGradient2]}>
          <Text variant="title2">{title}</Text>
        </LinearGradient>
      </Box>
    </TouchableOpacity>
  );
};
