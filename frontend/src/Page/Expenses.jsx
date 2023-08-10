import { useEffect, useState } from 'react'
import Expenses from "../components/Expenses/Expenses";
import useHttp from '../hooks/use-http';

const ExpensesPage = () => {
    let [expenses, setExpenses] = useState([]);
    let { isLoading, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest(
            {
                url: "http://127.0.0.1:8000/api/expenses"  
            },
            (recourse => {
                setExpenses(recourse);
            })
        );
    }, []);
    
    let removeHandler = (id) => {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id);
        });
    }

    return <Expenses expenses={expenses} removeHandler={removeHandler} isLoading={isLoading} />
}

export default ExpensesPage;