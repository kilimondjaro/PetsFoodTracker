import React from 'react';
import { ScrollView } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { PetsSelectorProps } from './types';

export const PetsSelector = ({
  pets = [],
  selectedPetIndex,
  onPetSelect,
}: PetsSelectorProps) => (
  <Box flex={1} flexDirection="row">
    <ScrollView horizontal>
      {pets.map((pet, index) => (
        <Touchable
          key={pet.id}
          onPress={() => {
            onPetSelect(index);
          }}
        >
          <Box
            width={40}
            height={40}
            backgroundColor={
              index === selectedPetIndex
                ? 'primaryGradient1'
                : 'textInputBackground'
            }
            alignItems="center"
            justifyContent="center"
            marginRight="m"
            borderRadius="ml"
          >
            <Text
              color={index === selectedPetIndex ? 'white' : 'textPrimary'}
              variant="title2"
            >
              {pet.name[0].toUpperCase()}
            </Text>
          </Box>
        </Touchable>
      ))}
    </ScrollView>
  </Box>
);
