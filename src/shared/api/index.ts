import {
  addDoc,
  collection as FBCollection,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from 'src/shared/config/firebase';

import { getPathArray } from './lib';

type DataProps = {
  collection: string;
  path?: string | string[];
};

type SetDataProps<T> = DataProps & {
  payload: T;
};

export const setData = async <T>({
  collection,
  path,
  payload,
}: SetDataProps<T>) => {
  const pathArray = getPathArray(path);

  if (pathArray.length > 0) {
    const docRef = doc(db, collection, ...pathArray);
    await setDoc(docRef, payload);
  } else {
    const docRef = FBCollection(db, collection);
    await addDoc(docRef, payload);
  }
};

export const getData = async ({ collection, path }: DataProps) => {
  const docRef = doc(db, collection, ...getPathArray(path));

  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
