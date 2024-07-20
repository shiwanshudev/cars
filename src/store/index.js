import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/CarsSlice";
import { formReducer, changeName, changeCost } from "./slices/FormSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

// Export Store and Action Creators
export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost };
