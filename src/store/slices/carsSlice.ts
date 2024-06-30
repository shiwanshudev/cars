import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Cars {
  name: string;
  cost: number;
  id: string;
}

interface StateType {
  searchTerm: string;
  cars: Cars[];
}

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state: StateType, action) {
      state.searchTerm = action.payload;
    },
    addCar(state: StateType, action) {
      const id = nanoid();
      const carToAdd: { name: string; cost: number; id: string } = {
        name: action.payload.name,
        cost: action.payload.cost,
        id,
      };
      state.cars.push(carToAdd);
    },
    removeCar(state, action) {
      const updatedCars = state.cars.filter(({ id }) => id !== action.payload);
      state.cars = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
