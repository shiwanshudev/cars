import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption
      // action.payload = {name: 'abc', cost: 140}
      state.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    // Assumption:
    // action.payload === id of the car we want to remove
    removeCar(state, action) {
      const updatedCars = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice;
export const carsReducer = carsSlice.reducer;
