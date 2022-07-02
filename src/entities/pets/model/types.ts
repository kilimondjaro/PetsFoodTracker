export type Pet = {
  name: string;
  dailyFoodAmount: number;
  foodPortionsPerDay: number;
};

export type SetPetDataRequestPayload = Pet;
export type GetPetsResponse = Pet[];

export type SetPetDataRequest = {
  id?: string; // New pet is created if there is no id
  payload: SetPetDataRequestPayload;
};
