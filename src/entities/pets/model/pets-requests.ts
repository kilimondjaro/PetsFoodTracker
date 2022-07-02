import { setData } from 'src/shared/api';

import type { SetPetDataRequest, SetPetDataRequestPayload } from './types';

export const setPetData = ({ id, payload }: SetPetDataRequest) => {
  return setData<SetPetDataRequestPayload>({
    collection: 'pets',
    path: id,
    payload,
  });
};
