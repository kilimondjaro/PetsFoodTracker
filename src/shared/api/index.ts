import type { QueryConstraint } from 'firebase/firestore';
import {
  addDoc,
  collection as FBCollection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from 'src/shared/config/firebase';

import { getPathArray } from './lib';

type DataProps = {
  collection: string;
  collectionPath?: string[];
  docPath?: string;
  queries?: QueryConstraint[];
};

type SetDataProps<T> = DataProps & {
  payload: T;
};

export const setData = async <T>({
  collection,
  collectionPath,
  docPath,
  payload,
}: SetDataProps<T>) => {
  const pathArray = getPathArray(collectionPath);

  const collectionRef = FBCollection(db, collection, ...pathArray);

  const docRef = docPath ? doc(collectionRef, docPath) : doc(collectionRef);

  await setDoc(docRef, payload);
};

export const setMultipleData = async <T>(requests: SetDataProps<T>[]) => {
  const batch = writeBatch(db);

  requests.forEach(({ collection, collectionPath, docPath, payload }) => {
    const pathArray = getPathArray(collectionPath);

    const collectionRef = FBCollection(db, collection, ...pathArray);
    const docRef = docPath ? doc(collectionRef, docPath) : doc(collectionRef);

    batch.set(docRef, payload);
  });

  await batch.commit();
};

export const getAllData = async <T>({
  collection,
  collectionPath,
  queries,
}: DataProps) => {
  const collectionRef = FBCollection(
    db,
    collection,
    ...getPathArray(collectionPath)
  );

  const q = query(collectionRef, ...(queries || []));
  const querySnapshot = await getDocs(q);

  const result: T[] = [];
  querySnapshot.forEach((response) => {
    result.push({ id: response.id, ...response.data() } as unknown as T);
  });

  return result;
};
