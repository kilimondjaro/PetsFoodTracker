import { getAllData, setData } from 'src/shared/api';

import type {
  GetPetsResponse,
  SetPetDataRequest,
  SetPetDataRequestPayload,
} from './types';

export const setPetData = ({ id, payload }: SetPetDataRequest) => {
  return setData<SetPetDataRequestPayload>({
    collection: 'pets',
    path: id,
    payload,
  });
};

export const getPets = () => {
  return getAllData<GetPetsResponse>({
    collection: 'pets',
  });
};
