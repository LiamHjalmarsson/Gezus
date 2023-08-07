import { useEffect, useState } from 'react'

import useHttp from '../../hooks/use-http';
import Card from '../Ui/Card/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './Chart/ExpensesChart';

import style from "./Expenses.module.css";

const Expenses = (props) => {
    let [expenses, setExpenses] = useState([]);
    let [filter, setFilter] = useState("2023");
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

    let removeHandeler = (id) => {
        sendRequest(
            {
                url: `http://127.0.0.1:8000/api/expenses/${id}`,
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            },
            (() => 
                setExpenses(prevExpenses => {
                    return prevExpenses.filter(expense => expense.id !== id);
                })
            )
        );
    }

    return (
        <>
            <div className={style.expensesContainer}>
                <Card custom={style.customCard}>
                    <ExpensesFilter expenses={expenses}/>
                </Card>
                <Card custom={style.customCard}>
                    <ExpensesList expenses={expenses} removeHandeler={removeHandeler} loading={isLoading} />
                </Card>
            </div>
        </>
    );
};

export default Expenses;
