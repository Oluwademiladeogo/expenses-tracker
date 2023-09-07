import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: 1,
    name: "Bike maintenance",
    price: 30.57,
    date: new Date(2021, 2, 30, 4, 55, 51),
  },
  {
    id: 2,
    name: "House rent",
    price: 3000.55,
    date: new Date(2021, 3, 13),
  },
  {
    id: 3,
    name: "Car Insurance",
    price: 294.99,
    date: new Date(2021, 3, 16),
  },
  {
    id: 4,
    name: "School Bills",
    price: 1200,
    date: new Date(2021, 4, 20),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense =>{
    //better way of adding exoenses because react ensures its always updated
   setExpenses(prevExpenses=>{
    return [expense, ...prevExpenses]
   })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
