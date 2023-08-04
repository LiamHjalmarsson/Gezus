import { useEffect, useState } from 'react'

import useHttp from '../../hooks/use-http';
import Card from '../Ui/Card/Card';
import ExpensesList from './ExpensesList';
import ExpenseForm from './ExpenseForm/ExpenseForm';

import style from "./Expenses.module.css";

const Expenses = (props) => {
    let [expenses, setExpenses] = useState([]);
    let [selectedCurrency, setSelectedCurrency] = useState("USD");
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
            <Card custom={style.customFormCard}>
                <ExpenseForm addExpense={addExpenseHandler} error={isError} />
            </Card>
            <Card>
                <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="KR">KR</option>
                </select>
            </Card>
            <Card custom={style.customCard}>
                <ExpensesList expenses={expenses} removeHandeler={removeHandeler} currency={selectedCurrency} />
            </Card>
            {
                isLoading && <p> loading... </p>
            }
        </>
    );
};

export default Expenses;
