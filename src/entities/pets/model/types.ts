export type Pet = {
  id: string;
  name: string;
  owners: string[];

  dailyFoodAmount: number;
  foodPortionsPerDay: number;

  currentDailyFoodAmountLeft: number;
  currentDailyFoodPortionsGiven: number;
};

export type CreatePetRequest = Pick<
  Pet,
  'name' | 'dailyFoodAmount' | 'foodPortionsPerDay'
>;

export type UpdatePetRequest = {
  id?: string;
  payload: Partial<Omit<Pet, 'id' | 'owners'>>;
};
