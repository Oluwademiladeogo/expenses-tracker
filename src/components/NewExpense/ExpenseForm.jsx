import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //check the commented out things if your form depends on the previous state
  // [enteredInput, setEnteredInput] = useState({
  //   setEnteredName: '',
  //   setEnteredDate: "",
  //   setEnteredPrice: ''
  // })
  const nameChangeHandler = (event) => {
    //to use, instead of the ...enteredinput approach
    // setEnteredName({
    //   ...enteredInput,
    //   enteredName: event.target.value
    // }) Alternatively
    // setEnteredInput((prevState)=>{
    //   return {...prevState, enteredName: event.target.value}
    // })
    setEnteredName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: enteredName,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredDate: "";
    setEnteredPrice: "";
    setEnteredName: "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          {/* two way binding is wahat we are doing to the element properties by adding value and binding it to entered.. */}
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredPrice}
            onChange={priceChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="ew-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
