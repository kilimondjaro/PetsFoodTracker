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
  id?: string;
  payload: Partial<Omit<Pet, 'id'>>;
};
