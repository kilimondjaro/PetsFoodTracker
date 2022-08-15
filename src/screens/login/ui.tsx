import React from 'react';
import { StyleSheet } from 'react-native';
import { SignInButton } from 'src/features/auth-button';
import { Background } from 'src/shared/ui/background';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';

export const SignInScreen = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Box position="absolute" style={StyleSheet.absoluteFill}>
        <Background />
      </Box>
      <Box flex={4}>
        <Box flex={2} justifyContent="center" alignItems="center">
          <Text variant="title1" color="textPrimary">
            Nyam Nyam
          </Text>
        </Box>
        <Box flex={3} />
      </Box>
      <Box flexDirection="row" justifyContent="center" flex={1}>
        <Box>
          <SignInButton />
        </Box>
      </Box>
    </Box>
  );
};
