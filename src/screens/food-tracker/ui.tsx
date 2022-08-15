import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import type { NavigationRoute } from 'src/app/navigation';
import { usePets } from 'src/entities/pets/model';
import { DailyAmount } from 'src/entities/pets/ui/daily-amount';
import { SelectedPetInfo } from 'src/entities/pets/ui/selected-pet-info';
import { PetsSelector } from 'src/features/pet-selector';
import { PortionSubtractor } from 'src/features/portion-subtractor';
import VerticalDots from 'src/shared/assets/icons/verticalDots.svg';
import { Box } from 'src/shared/ui/box';
import { Button } from 'src/shared/ui/button';
import { PawsBackground } from 'src/shared/ui/paws-background';
import { Touchable } from 'src/shared/ui/touchable';

export const FoodTrackerScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationRoute>) => {
  const pets = usePets();
  const [selectedPetIndex, setSelectedPetIndex] = React.useState(0);

  const selectedPet = pets.data?.[selectedPetIndex];

  return (
    <Box flex={1}>
      <Box position="absolute" width="100%" height="100%">
        <PawsBackground />
      </Box>
      <Box
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        paddingVertical="xxl"
        paddingHorizontal="m"
      >
        <Box>
          <Box
            backgroundColor="transparentBackground"
            shadowOpacity={0.15}
            shadowRadius={8}
            shadowOffset={{ width: 0, height: 0 }}
            borderRadius="m"
            height={60}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal="s"
            marginTop="l"
            width="100%"
          >
            <PetsSelector
              pets={pets.data || []}
              selectedPetIndex={selectedPetIndex}
              onPetSelect={setSelectedPetIndex}
            />
            <Touchable onPress={() => navigation.navigate('Settings')}>
              <VerticalDots />
            </Touchable>
          </Box>
          {!!selectedPet && (
            <Box marginTop="xl">
              <SelectedPetInfo pet={selectedPet} />
            </Box>
          )}
        </Box>
        <Box flex={1} justifyContent="center" width="100%">
          {!!selectedPet && (
            <Box>
              <Box alignItems="center">
                <DailyAmount pet={selectedPet} />
              </Box>
              <Box marginTop="xl">
                <PortionSubtractor pet={selectedPet} />
              </Box>
            </Box>
          )}
          {pets.data?.length === 0 && (
            <Box flex={1} justifyContent="center" alignItems="center">
              <Button
                title="Create Pet"
                onPress={() => {
                  navigation.navigate('PetProfile');
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
