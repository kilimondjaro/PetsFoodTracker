import React from 'react';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';

import type { SelectedPetInfoProps } from './types';

export const SelectedPetInfo = ({ pet }: SelectedPetInfoProps) => {
  const onePotionAmount = Math.floor(
    pet.dailyFoodAmount / pet.foodPortionsPerDay
  );

  return (
    <Box>
      <Text variant="title1" color="primaryGradient1">
        {pet.name}
      </Text>
      <Text color="textSecondary">
        {t('selectedPetInfo.perDay', { amount: onePotionAmount })}
      </Text>
    </Box>
  );
};
