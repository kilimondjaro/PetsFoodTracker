import { where } from 'firebase/firestore';
import { getUid } from 'src/entities/user/lib';
import { getAllData, setData } from 'src/shared/api';

import type { CreatePetRequest, Pet, UpdatePetRequest } from './types';

export const createPet = (payload: CreatePetRequest) => {
  const uid = getUid();

  if (!uid) {
    throw new Error('User is not authenticated');
  }

  return setData<Omit<Pet, 'id'>>({
    collection: 'pets',
    payload: {
      ...payload,
      owners: [uid],
      currentDailyFoodAmountLeft: payload.dailyFoodAmount,
      currentDailyFoodPortionsGiven: 0,
    },
  });
};

export const updatePet = ({ id, payload }: UpdatePetRequest) => {
  const uid = getUid();

  if (!uid) {
    throw new Error('User is not authenticated');
  }

  return setData<typeof payload>({
    collection: 'pets',
    docPath: id,
    payload,
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
