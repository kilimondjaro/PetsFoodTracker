import { useTheme } from '@shopify/restyle';
import React from 'react';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { ModalLayout } from 'src/shared/ui/modal-layout';
import { SettingsRow } from 'src/shared/ui/settings-row/ui';
import { Text } from 'src/shared/ui/text';

export const PetProfileScreen = () => {
  return (
    <ModalLayout>
      <Box flex={1} paddingVertical="l" flexDirection="column">
        <Text marginBottom="l" variant="title1" color="primaryGradient1">
          Pet Profile
        </Text>
        <SettingsRow
          name={t('petProfileScreen.name')}
          value={null}
          onPress={() => {
            return 1;
          }}
        />
        <SettingsRow
          name={t('petProfileScreen.dailyAmount')}
          value={null}
          onPress={() => {
            return 1;
          }}
        />
        <SettingsRow
          name={t('petProfileScreen.timesPerDay')}
          value={null}
          onPress={() => {
            return 1;
          }}
        />
      </Box>
    </ModalLayout>
  );
};
