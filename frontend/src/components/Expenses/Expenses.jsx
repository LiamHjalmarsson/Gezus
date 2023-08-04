import { useCallback, useEffect, useState } from 'react'
import Card from '../Ui/Card';

import style from "./Expenses.module.css";
import ExpensesList from './ExpensesList';
import ExpenseForm from './Expense/ExpenseForm/ExpenseForm';
import useHttp from '../../hooks/use-http';

const Expenses = (props) => {
    let [expenses, setExpenses] = useState([]);
    let { isLoading, isError, sendRequest } = useHttp();
    
    useEffect(() => {
        sendRequest(
            {
                url: "http://127.0.0.1:8000/api/expenses"  
            },
            (recourse => {
                let expenses = [];
                recourse.forEach(expense => {
                    expenses.push(expense);
                });
                setExpenses(expenses);
            })
        )
    }, [sendRequest]);

    let addExpenseHandler = async (expense) => {
        sendRequest(
            {
                url: "http://127.0.0.1:8000/api/expenses",
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(expense)
            },
            (res => {
                setExpenses(prevExpenses => [...prevExpenses, res])
            })
        );
    }

    return (
        <>
            <Card>
                <ExpenseForm addExpense={addExpenseHandler} error={isError} />
            </Card>
            <Card custom={style.customCard}>
                <ExpensesList expenses={expenses} />
            </Card>
        </>
    );
};

export default Expenses;
