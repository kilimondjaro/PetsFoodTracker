import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { auth } from 'src/shared/config/firebase';
import { t } from 'src/shared/lib/translate';
import { Button } from 'src/shared/ui/button';

import { signInToFirebase } from './lib/firebaseSignIn';

WebBrowser.maybeCompleteAuthSession();

export const SignInButton = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants.manifest?.extra?.googleClientId,
  });

  const openAuthWebForm = async () => {
    try {
      await promptAsync();
    } catch (err: unknown) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  React.useEffect(() => {
    void signInToFirebase(response);
  }, [response]);

  return (
    <Button
      // disabled={!request}
      title={t('authButton.signIn')}
      onPress={() => {
        void openAuthWebForm();
      }}
    />
  );
};

export const SignOutButton = () => (
  <Button
    title={t('authButton.signOut')}
    onPress={() => {
      void auth.signOut();
    }}
  />
);
