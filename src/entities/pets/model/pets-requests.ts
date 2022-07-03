import { where } from 'firebase/firestore';
import uniq from 'lodash/uniq';
import { getUid } from 'src/entities/user/lib';
import { getAllData, setData } from 'src/shared/api';

import type { Pet, SetPetDataRequest } from './types';

export const setPetData = ({ id, payload }: SetPetDataRequest) => {
  const uid = getUid();

  if (!uid) {
    throw new Error('User is not authenticated');
  }

  return setData<typeof payload>({
    collection: 'pets',
    docPath: id,
    payload: { ...payload, owners: uniq([...payload.owners, uid]) },
  });
};

export const getPets = () => {
  const uid = getUid();

  if (!uid) {
    throw new Error('User is not authenticated');
  }

  return getAllData<Pet>({
    collection: 'pets',
    queries: [where('owners', 'array-contains', uid)],
  });
};
