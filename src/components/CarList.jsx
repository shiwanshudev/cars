import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const { cars, name } = useSelector((state) => {
    const filteredCars = state.cars.data.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchTerm)
    );
    return {
      cars: filteredCars,
      name: state.form.name,
    };
  });

  const dispatch = useDispatch();
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
