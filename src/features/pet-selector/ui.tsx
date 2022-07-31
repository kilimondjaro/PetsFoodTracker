import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';
import { Touchable } from 'src/shared/ui/touchable';

import type { PetsSelectorProps } from './types';

export const PetsSelector = ({
  pets = [],
  selectedPetIndex,
  onPetSelect,
}: PetsSelectorProps) => (
  <Box flex={1} flexDirection="row" height="100%">
    <ScrollView horizontal contentContainerStyle={styles.scrollView}>
      {pets.map((pet, index) => (
        <Touchable
          key={pet.id}
          isDisabled={index === selectedPetIndex}
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
                : 'transparentBackground'
            }
            alignItems="center"
            justifyContent="center"
            marginRight="m"
            borderRadius="ml"
            shadowOffset={{ width: 0, height: 0 }}
            shadowOpacity={0.15}
            shadowRadius={4}
          >
            <Text
              color={index === selectedPetIndex ? 'white' : 'textPrimary'}
              variant="title2"
            >
              {pet.name[0]?.toUpperCase() || ''}
            </Text>
          </Box>
        </Touchable>
      ))}
    </ScrollView>
  </Box>
);

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
  },
});
