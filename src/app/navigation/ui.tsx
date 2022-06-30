import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useCurrentUser } from 'src/processes/lib/auth';
import { FoodTrackerScreen } from 'src/screens/food-tracker';
import { SignInScreen } from 'src/screens/login';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const user = useCurrentUser();

  if (user.isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}
      >
        {!!user.data ? (
          <Stack.Screen name="FoodTracker" component={FoodTrackerScreen} />
        ) : (
          <Stack.Screen name="Login" component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
