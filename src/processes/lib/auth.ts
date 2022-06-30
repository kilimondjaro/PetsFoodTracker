import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { auth } from 'src/shared/config/firebase';

export const useCurrentUser = () => {
  const [user, setUser] = React.useState<User | null>(auth.currentUser);
  const [isAuthInitializing, setInitStatus] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setInitStatus(false);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (isAuthInitializing) {
    return { data: undefined, isLoading: true };
  }

  return { data: user, isLoading: false };
};
