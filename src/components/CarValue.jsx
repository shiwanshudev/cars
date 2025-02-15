import { useSelector } from "react-redux";
export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm)
    );
    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;

    return filteredCars.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });
  return <div className="car-value">Total Cost ${totalCost}</div>;
}
