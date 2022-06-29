import { SignInButton } from '../../features/auth-button';
import { Box } from '../../shared/ui/box';

export const LoginScreen = () => {
  return (
    <Box
      backgroundColor="textSecondary"
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <SignInButton />
    </Box>
  );
};
