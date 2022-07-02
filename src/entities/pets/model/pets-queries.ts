import { useMutation } from 'react-query';

import { setPetData } from './pets-requests';

export const useSetPetData = () => {
  return useMutation(setPetData);
};
