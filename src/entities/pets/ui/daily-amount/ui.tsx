import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';

import type { DailyAmountProps } from './types';

export const DailyAmount = ({ pet }: DailyAmountProps) => {
  const {
    currentDailyFoodPortionsGiven,
    currentDailyFoodAmountLeft,
    foodPortionsPerDay,
  } = pet;

  return (
    <Box alignItems="center">
      <Text variant="number1" color="textPrimary">
        {currentDailyFoodAmountLeft}
      </Text>
      <Text color="textSecondary">
        {t('dailyAmount.ofTimes', {
          current: currentDailyFoodPortionsGiven,
          total: foodPortionsPerDay,
        })}
      </Text>
    </Box>
  );
};
