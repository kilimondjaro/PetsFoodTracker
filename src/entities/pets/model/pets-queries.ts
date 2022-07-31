import { useMutation, useQuery } from 'react-query';

import { createPet, getPets, updatePet } from './pets-requests';

export enum PetsQueryKeys {
  getPets = 'getPets',
}

export const usePets = () => {
  return useQuery(PetsQueryKeys.getPets, getPets);
};

export const useUpdatePet = () => {
  return useMutation(updatePet);
};

export const useCreatePet = () => {
  return useMutation(createPet);
};
