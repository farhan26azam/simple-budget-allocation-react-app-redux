import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, currency, spending } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert(`The value cannot exceed remaining funds ${remaining} ${currency}`);
      setCost("");
      return;
    }
    if (cost > 20000) {
      alert("Cost can not exceed 20,000 ", spending);
      setCost("");
      return;
    }
    if (cost < props.spending) {
      alert("You can not reduce the budget value lower than spending.");
      return;
    }
    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {" "}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          {/* <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Budget
              <span style={{ marginLeft: "40px" }}>{currency}</span>
              <input
                required="required"
                type="number"
                id="cost"
                value={cost}
                style={{ size: 10 }}
                onChange={(event) => setCost(event.target.value)}
              ></input>
            </label>
          </div> */}

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Currency
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect03"
            onChange={(event) =>
              dispatch({ type: "CHG_CURRENCY", payload: event.target.value })
            }
          >
            <option defaultValue value="$" name="dollar">
              Dollar
            </option>
            <option value="£" name="pound">
              Pound
            </option>
            <option value="€" name="euro">
              Euro
            </option>
            <option value="₹" name="ruppee">
              Ruppee
            </option>
          </select>

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
