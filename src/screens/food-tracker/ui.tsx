import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SignOutButton } from 'src/features/auth-button';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { Text } from 'src/shared/ui/text';

export const FoodTrackerScreen = () => {
  return (
    <View style={styles.container}>
      <Text textAlign="center" variant="text">
        {t('foodTrackerScreen.sampleTitle')}
      </Text>
      <StatusBar style="auto" />
      <Box backgroundColor="textPrimary" width={300} height={300} />
      <SignOutButton />
    </View>
  );
};

const whiteColor = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
