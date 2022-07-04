import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import type { NavigationRoute } from 'src/app/navigation';
import { usePets } from 'src/entities/pets/model';
import { SignOutButton } from 'src/features/auth-button';
import Plus from 'src/shared/assets/icons/plus.svg';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { ModalLayout } from 'src/shared/ui/modal-layout';
import { SettingsRow } from 'src/shared/ui/settings-row/ui';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

export const SettingsScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationRoute>) => {
  const pets = usePets();

  return (
    <ModalLayout>
      <Box
        flex={1}
        paddingVertical="l"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text marginBottom="l" variant="title1" color="primaryGradient1">
              {t('settingsScreen.petsTitle')}
            </Text>
            <Touchable
              onPress={() => {
                navigation.navigate('PetProfile');
              }}
            >
              <Box paddingBottom="m" paddingHorizontal="xs">
                <Plus />
              </Box>
            </Touchable>
          </Box>
          {pets.data?.map((pet) => (
            <SettingsRow
              key={pet.id}
              name={pet.name}
              value={null}
              onPress={() => navigation.navigate('PetProfile', pet)}
            />
          ))}
        </Box>
        <SignOutButton />
      </Box>
    </ModalLayout>
  );
};
