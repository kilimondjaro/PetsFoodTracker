import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import type { NavigationRoute } from 'src/app/navigation';
import {
  PetsQueryKeys,
  useCreatePet,
  useUpdatePet,
} from 'src/entities/pets/model';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { Button } from 'src/shared/ui/button';
import { ModalLayout } from 'src/shared/ui/modal-layout';
import { ModalWrapper } from 'src/shared/ui/modal-wrapper';
import type {
  SettingsInputModalProps,
  SettingsInputType,
} from 'src/shared/ui/settings-input-modal';
import { SettingsInputModal } from 'src/shared/ui/settings-input-modal';
import { SettingsRow } from 'src/shared/ui/settings-row/ui';
import { Text } from 'src/shared/ui/text';

export const PetProfileScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<NavigationRoute, 'PetProfile'>) => {
  const pet = route.params;
  const [petName, setPetName] = React.useState<string | null>(
    pet?.name || null
  );
  const [dailyFoodAmount, setDailyFoodAmount] = React.useState<number | null>(
    pet?.dailyFoodAmount || null
  );
  const [foodPortionsPerDay, setFoodPortionsPerDay] = React.useState<
    number | null
  >(pet?.foodPortionsPerDay || null);

  const updatePet = useUpdatePet();
  const createPet = useCreatePet();

  const queryClient = useQueryClient();

  const savePetProfile = () => {
    if (!petName || !dailyFoodAmount || !foodPortionsPerDay) {
      return;
    }

    const onSuccess = async () => {
      await queryClient.invalidateQueries([PetsQueryKeys.getPets]);
      navigation.navigate('FoodTracker');
    };

    // Update existing pet
    if (pet) {
      updatePet.mutate(
        {
          id: pet.id,
          payload: {
            name: petName,
            dailyFoodAmount,
            foodPortionsPerDay,
          },
        },
        {
          onSuccess,
        }
      );
      return;
    }

    // Create new pet
    createPet.mutate(
      {
        name: petName,
        dailyFoodAmount,
        foodPortionsPerDay,
      },
      {
        onSuccess,
      }
    );
  };

  return (
    <ModalLayout>
      <Box
        flex={1}
        paddingVertical="l"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text marginBottom="l" variant="title1" color="primaryGradient1">
            {t('petProfileScreen.title')}
          </Text>
          <PetProfileSettingsRow
            title={t('petProfileScreen.name')}
            value={petName}
            onSave={setPetName}
          />
          <PetProfileSettingsRow
            title={t('petProfileScreen.dailyAmount')}
            inputType="number"
            value={dailyFoodAmount}
            keyboardType="number-pad"
            onSave={setDailyFoodAmount}
          />
          <PetProfileSettingsRow
            title={t('petProfileScreen.timesPerDay')}
            inputType="number"
            value={foodPortionsPerDay}
            keyboardType="number-pad"
            onSave={setFoodPortionsPerDay}
          />
        </Box>
        <Box>
          <Button
            title={t('petProfileScreen.save')}
            isLoading={updatePet.isLoading}
            onPress={savePetProfile}
          />
        </Box>
      </Box>
    </ModalLayout>
  );
};

type PetProfileSettingsRowProps<T extends SettingsInputType> = {
  value: T;
} & Pick<
  SettingsInputModalProps<T>,
  'title' | 'keyboardType' | 'onSave' | 'inputType'
>;

const PetProfileSettingsRow = <T extends SettingsInputType>({
  title,
  inputType = 'string',
  value,
  keyboardType,
  onSave,
}: PetProfileSettingsRowProps<T>) => (
  <ModalWrapper
    renderModalTrigger={({ openModal }) => (
      <SettingsRow name={title} value={value} onPress={openModal} />
    )}
    renderModalContent={({ closeModal }) => (
      <SettingsInputModal
        initialValue={value}
        inputType={inputType}
        title={title}
        keyboardType={keyboardType}
        closeModal={closeModal}
        onSave={onSave}
      />
    )}
  />
);
