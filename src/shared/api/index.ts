import {
  addDoc,
  collection as FBCollection,
  doc,
  getDoc,
  getDocs,
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

export const getAllData = async <T>({ collection, path }: DataProps) => {
  const collectionRef = FBCollection(db, collection, ...getPathArray(path));
  const querySnapshot = await getDocs(collectionRef);

  const result: T[] = [];
  querySnapshot.forEach((a) => {
    result.push(a.data() as T);
  });

  return result;
};
