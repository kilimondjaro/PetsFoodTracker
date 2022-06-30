import { SignInButton } from '../../features/auth-button';
import { Box } from '../../shared/ui/box';

export const SignInScreen = () => {
  return (
    <Box
      backgroundColor="mainBackground"
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <SignInButton />
    </Box>
  );
};
