import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodTrackerScreen } from 'src/screens/food-tracker';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}
      >
        <Stack.Screen name="FoodTracker" component={FoodTrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
