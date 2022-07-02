export type SetPetDataRequestPayload = {
  name: string;
  dailyFoodAmount: number;
  foodPortionsPerDay: number;
};

export type SetPetDataRequest = {
  id?: string; // New pet is created if there is no id
  payload: SetPetDataRequestPayload;
};
