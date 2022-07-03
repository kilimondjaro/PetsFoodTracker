import { ActivityIndicator } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { ButtonProps } from './types';

export const Button = ({
  title,
  isDisabled,
  isLoading,
  onPress,
}: ButtonProps) => {
  return (
    <Touchable isDisabled={isDisabled || isLoading} onPress={onPress}>
      <Box
        height={50}
        borderRadius="s"
        paddingHorizontal="m"
        justifyContent="center"
        alignItems="center"
        backgroundColor="buttonBackground"
        shadowOpacity={0.1}
        shadowRadius={8}
      >
        <Text
          variant="title2"
          color="primaryGradient1"
          opacity={isLoading ? 0 : 100}
        >
          {title}
        </Text>
        {isLoading && (
          <Box
            position="absolute"
            left={0}
            right={0}
            top={0}
            bottom={0}
            justifyContent="center"
            alignItems="center"
          >
            <ActivityIndicator size="small" />
          </Box>
        )}
        {/*<LinearGradient gradientColors={[primaryGradient1, primaryGradient2]}>*/}
        {/*  */}
        {/*</LinearGradient>*/}
      </Box>
    </Touchable>
  );
};
