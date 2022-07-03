import { auth } from 'src/shared/config/firebase';

export const getUid = () => auth.currentUser?.uid;
