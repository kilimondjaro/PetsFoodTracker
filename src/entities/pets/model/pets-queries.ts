import { useMutation, useQuery } from 'react-query';

import { getPets, setPetData } from './pets-requests';

export enum PetsQueryKeys {
  getPets = 'getPets',
}

export const usePets = () => {
  return useQuery(PetsQueryKeys.getPets, getPets);
};

export const useSetPetData = () => {
  return useMutation(setPetData);
};
