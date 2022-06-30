import React from 'react';
import { Button } from 'react-native';
import { Box } from 'src/shared/ui/box';

import type { StorybookToggleProps } from './types';

export const StorybookToggle = ({ onToggle }: StorybookToggleProps) => {
  if (!__DEV__) {
    return null;
  }
  return (
    <Box position="absolute" right={30} bottom={100}>
      <Button title="S" onPress={onToggle} />
    </Box>
  );
};
