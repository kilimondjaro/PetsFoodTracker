export type Pet = {
  id: string;
  name: string;
  dailyFoodAmount: number;
  foodPortionsPerDay: number;
  owners: string[];
};

export type SetPetDataRequest = {
  id?: string; // New pet is created if there is no id
  payload: Omit<Pet, 'id'>;
};
