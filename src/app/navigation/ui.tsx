import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { useCurrentUser } from 'src/processes/lib/auth';
import { FoodTrackerScreen } from 'src/screens/food-tracker';
import { SignInScreen } from 'src/screens/login';
import { PetProfileScreen } from 'src/screens/pet-profile';
import { SettingsScreen } from 'src/screens/settings';
import type { Theme } from 'src/shared/ui/theme/types';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const user = useCurrentUser();
  const theme = useTheme<Theme>();

  if (user.isLoading) {
    return null;
  }

  return (
    <NavigationContainer
      theme={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        colors: {
          background: 'white',
          border: 'white',
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          contentStyle: {
            backgroundColor: theme.colors.transparentBackground,
          },
        }}
      >
        {!!user.data ? (
          <>
            <Stack.Screen name="FoodTracker" component={FoodTrackerScreen} />
            <Stack.Screen name="PetProfile" component={PetProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
