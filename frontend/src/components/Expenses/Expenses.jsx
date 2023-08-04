import { useEffect, useState } from 'react'

import useHttp from '../../hooks/use-http';
import Card from '../Ui/Card';
import ExpensesList from './ExpensesList';
import ExpenseForm from './Expense/ExpenseForm/ExpenseForm';

import style from "./Expenses.module.css";

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
        );
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
            {
                isLoading && <p> loading... </p>
            }
        </>
    );
};

export default Expenses;
