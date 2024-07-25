import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const cars = useSelector((state) => state.cars.data);
  const dispatch = useDispatch();
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => (
    <div key={car.id} className="panel">
      <p>
        {car.name} - ${car.cost}
      </p>
      <button className="button is-danger" onClick={() => handleCarDelete(car)}>
        Delete
      </button>
    </div>
  ));
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
