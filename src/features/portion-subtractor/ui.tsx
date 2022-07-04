import { ImpactFeedbackStyle } from 'expo-haptics';
import { useQueryClient } from 'react-query';
import type { Pet } from 'src/entities/pets/model';
import { PetsQueryKeys, useSetPetData } from 'src/entities/pets/model';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { PortionSubtractorProps } from './types';

export const PortionSubtractor = ({ pet }: PortionSubtractorProps) => {
  const portionTemplates = [10, 15, 20];
  const setPetData = useSetPetData();
  const queryClient = useQueryClient();

  return (
    <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
      {portionTemplates.map((portion) => (
        <Touchable
          key={portion}
          feedback={ImpactFeedbackStyle.Heavy}
          isDisabled={setPetData.isLoading}
          onPress={() => {
            setPetData.mutate(
              {
                id: pet.id,
                payload: {
                  currentDailyFoodAmountLeft:
                    pet.currentDailyFoodAmountLeft - portion,
                  currentDailyFoodPortionsGiven:
                    pet.currentDailyFoodPortionsGiven + 1,
                },
              },
              {
                onSuccess: async () => {
                  queryClient.setQueryData<Pet[]>(
                    PetsQueryKeys.getPets,
                    (old) => {
                      return old
                        ? old.map((curPet) => {
                            if (curPet.id === pet.id) {
                              curPet.currentDailyFoodAmountLeft -= portion;
                              curPet.currentDailyFoodPortionsGiven += 1;
                            }

                            return curPet;
                          })
                        : [];
                    }
                  );
                  await queryClient.invalidateQueries(PetsQueryKeys.getPets);
                },
              }
            );
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
              {portion}
            </Text>
          </Box>
        </Touchable>
      ))}
    </Box>
  );
};
