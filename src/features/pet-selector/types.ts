import type { Pet } from 'src/entities/pets/model';

export type PetsSelectorProps = {
  pets: Pet[];
  selectedPetIndex: number;
  onPetSelect: (petIndex: number) => void;
};
