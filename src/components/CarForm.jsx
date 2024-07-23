import { addCar, changeCost, changeName } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function CarForm() {
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name"></label>
            <input
              type="text"
              id="name"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="cost"></label>
            <input
              type="number"
              id="cost"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}
