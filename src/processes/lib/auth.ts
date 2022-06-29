import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { auth } from 'src/shared/config/firebase';

export const useCurrentUser = () => {
  const [user, setUser] = React.useState<User | null>(null);
  const isAuthInitializing = React.useRef(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      isAuthInitializing.current = false;
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (isAuthInitializing.current) {
    return { data: undefined, isLoading: true };
  }

  return { data: user, isLoading: false };
};
