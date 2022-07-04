export type Pet = {
  id: string;
  name: string;
  owners: string[];

  dailyFoodAmount: number;
  foodPortionsPerDay: number;

  currentDailyFoodAmountLeft: number;
  currentDailyFoodPortionsGiven: number;
};

export type SetPetDataRequest = {
  id?: string; // New pet is created if there is no id
  payload: Omit<Pet, 'id'>;
};
