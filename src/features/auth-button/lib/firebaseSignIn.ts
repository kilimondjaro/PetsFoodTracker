import type { AuthSessionResult } from 'expo-auth-session';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from 'src/shared/config/firebase';

export const signInToFirebase = async (
  authResponse: AuthSessionResult | null
) => {
  try {
    if (authResponse?.type === 'success') {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { id_token } = authResponse.params;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
    }
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
