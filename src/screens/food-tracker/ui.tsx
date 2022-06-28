import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';

export function FoodTrackerScreen() {
  return (
    <View style={styles.container}>
      <Text textAlign="center" variant="text">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Box backgroundColor="textPrimary" width={300} height={300} />
    </View>
  );
}

const whiteColor = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
