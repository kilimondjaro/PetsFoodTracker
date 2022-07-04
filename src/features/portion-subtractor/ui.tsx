import { ImpactFeedbackStyle } from 'expo-haptics';
import React from 'react';
import { useQueryClient } from 'react-query';
import type { Pet } from 'src/entities/pets/model';
import { PetsQueryKeys, useSetPetData } from 'src/entities/pets/model';
import { Box } from 'src/shared/ui/box';
import { ModalWrapper } from 'src/shared/ui/modal-wrapper';
import { SettingsInputModal } from 'src/shared/ui/settings-input-modal';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { PortionSubtractorProps } from './types';

export const PortionSubtractor = ({ pet }: PortionSubtractorProps) => {
  const portionTemplates = [10, 15, 20];
  const setPetData = useSetPetData();
  const queryClient = useQueryClient();

  const doSubtraction = (portion: number) => {
    setPetData.mutate(
      {
        id: pet.id,
        payload: {
          currentDailyFoodAmountLeft: pet.currentDailyFoodAmountLeft - portion,
          currentDailyFoodPortionsGiven: pet.currentDailyFoodPortionsGiven + 1,
        },
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(PetsQueryKeys.getPets);
        },
      }
    );
    queryClient.setQueryData<Pet[]>(PetsQueryKeys.getPets, (old) => {
      return old
        ? old.map((curPet) => {
            if (curPet.id === pet.id) {
              curPet.currentDailyFoodAmountLeft -= portion;
              curPet.currentDailyFoodPortionsGiven += 1;
            }

            return curPet;
          })
        : [];
    });
  };

  return (
    <Box>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom="l"
      >
        {portionTemplates.map((portion) => (
          <PortionTile
            key={portion}
            portion={portion}
            isDisabled={setPetData.isLoading}
            onPress={doSubtraction}
          />
        ))}
      </Box>
      <ModalWrapper
        renderModalTrigger={({ openModal }) => (
          <Box alignItems="center">
            <PortionTile
              portion={0}
              isDisabled={setPetData.isLoading}
              onPress={openModal}
            />
          </Box>
        )}
        renderModalContent={({ closeModal }) => (
          <SettingsInputModal
            initialValue={0}
            inputType="number"
            title="Portion"
            keyboardType="number-pad"
            closeModal={closeModal}
            onSave={(value) => doSubtraction(value)}
          />
        )}
      />
    </Box>
  );
};

type PortionTileProps = {
  portion: number;
  onPress: (portion: number) => void;
  isDisabled: boolean;
};

const PortionTile = ({ portion, isDisabled, onPress }: PortionTileProps) => (
  <Touchable
    feedback={ImpactFeedbackStyle.Heavy}
    isDisabled={isDisabled}
    onPress={() => {
      onPress(portion);
    }}
  >
    <Box
      width={100}
      height={100}
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      backgroundColor="transparentBackground"
      shadowOffset={{ width: 0, height: 0 }}
      shadowOpacity={0.15}
      shadowRadius={8}
    >
      <Text variant="number2" color="textPrimary">
        {portion || '...'}
      </Text>
    </Box>
  </Touchable>
);
