import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { FoodTrackerScreen } from 'src/screens/food-tracker';
import { LoginScreen } from 'src/screens/login';

import { useCurrentUser } from '../../processes/lib/auth';
import { app } from '../../shared/config/firebase';

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
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
