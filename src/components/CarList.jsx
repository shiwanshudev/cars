import { useSelector } from "react-redux";

export default function CarList() {
  const cars = useSelector((state) => state.cars.data);
  console.log(cars);
  return (
    <div>
      <h1>CarList</h1>
      {cars.map((car) => (
        <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
}
