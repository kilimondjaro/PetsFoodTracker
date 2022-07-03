import type { Pet } from 'src/entities/pets/model';

export type NavigationRoute = {
  FoodTracker: undefined;
  PetProfile: undefined | Pet;
  Settings: undefined;
};
