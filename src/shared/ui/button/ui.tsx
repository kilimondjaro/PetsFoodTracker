import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { ButtonProps } from './types';

export const Button = ({ onPress, title }: ButtonProps) => {
  return (
    <Touchable onPress={onPress}>
      <Box
        height={50}
        borderRadius="s"
        paddingHorizontal="m"
        justifyContent="center"
        backgroundColor="buttonBackground"
        shadowOpacity={0.1}
        shadowRadius={8}
      >
        <Text variant="title2" color="primaryGradient1">
          {title}
        </Text>
        {/*<LinearGradient gradientColors={[primaryGradient1, primaryGradient2]}>*/}
        {/*  */}
        {/*</LinearGradient>*/}
      </Box>
    </Touchable>
  );
};
