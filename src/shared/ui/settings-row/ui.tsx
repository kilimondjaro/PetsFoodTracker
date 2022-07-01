import React from 'react';
import VerticalDots from 'src/shared/assets/icons/verticalDots.svg';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { SettingRowProps } from './types';

export const SettingsRow = ({ name, value, onPress }: SettingRowProps) => {
  return (
    <Box marginBottom="m">
      <Touchable onPress={onPress}>
        <Box flexDirection="row" alignItems="center">
          <Box flex={1}>
            <Text color="textPrimary" variant="title2">
              {name}
            </Text>
          </Box>
          {!!value ? (
            <Text color="textSecondary" variant="text">
              {value}
            </Text>
          ) : (
            <VerticalDots />
          )}
        </Box>
      </Touchable>
      <Box height={1} backgroundColor="divider" marginTop="m" />
    </Box>
  );
};
