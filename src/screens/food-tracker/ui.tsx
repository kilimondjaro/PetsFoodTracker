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
import { Touchable } from 'src/shared/ui/touchable';

export const FoodTrackerScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationRoute>) => {
  const pets = usePets();
  const [selectedPetIndex, setSelectedPetIndex] = React.useState(0);

  return (
    <Box
      flex={1}
      backgroundColor="transparentBackground"
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
        {!!pets.data && (
          <Box marginTop="xl">
            <SelectedPetInfo pet={pets.data[selectedPetIndex]} />
          </Box>
        )}
      </Box>
      <Box flex={1} justifyContent="center" width="100%">
        {!!pets.data && (
          <Box>
            <Box alignItems="center">
              <DailyAmount pet={pets.data[selectedPetIndex]} />
            </Box>
            <Box marginTop="xl">
              <PortionSubtractor pet={pets.data[selectedPetIndex]} />
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
  );
};
