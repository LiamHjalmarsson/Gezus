import { useCallback, useEffect, useState } from 'react'
import './App.css'



function App() {

  let [expenses, setExpenses] = useState([]);

  let fetchExpenses = useCallback(async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/expenses");
      let recourse = await response.json();

      let loaded = [];

      recourse.forEach(expense => {
        loaded.push(expense);
      });

      setExpenses(loaded);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <div>
        { expenses.map(exp => (
          <p> {exp.title} </p>
        ))}
      </div>
    </>
  )
}

export default App
