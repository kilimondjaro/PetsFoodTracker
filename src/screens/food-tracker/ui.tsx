import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import type { NavigationRoute } from 'src/app/navigation';
import { SignOutButton } from 'src/features/auth-button';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { Button } from 'src/shared/ui/button';
import { Text } from 'src/shared/ui/text';

export const FoodTrackerScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationRoute, 'PetProfile'>) => {
  return (
    <Box
      flex={1}
      backgroundColor="transparentBackground"
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="xxl"
    >
      <StatusBar style="auto" />
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text marginBottom="l" textAlign="center" variant="text">
          {t('foodTrackerScreen.sampleTitle')}
        </Text>
        <Button
          title="Create Pet"
          onPress={() => {
            navigation.navigate('PetProfile');
          }}
        />
      </Box>
      <SignOutButton />
    </Box>
  );
};
