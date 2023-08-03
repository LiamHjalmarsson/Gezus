import { useCallback, useEffect, useState } from 'react'
import Card from '../Ui/Card';
import Expense from './Expense/Expense';

import style from "./Expenses.module.css";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    let [expenses, setExpenses] = useState([]);

    let fetchExpenses = useCallback(async () => {
        try {
            let response = await fetch("http://127.0.0.1:8000/api/expenses");
            let recourse = await response.json();

            let loaded = [];

            recourse.forEach((expense) => {
                loaded.push(expense);
            });

            setExpenses(loaded);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses]);

    let addExpenseHandler = async (expense) => {
        try {
            let response = await fetch("http://127.0.0.1:8000/api/expenses", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(expense)
            });

            let res = await response.json();
            console.log(res);
        } catch (error) {
            console.log(console.error(););
        }
    }

    return (
        <>
            <Card custom={style.customCard}>
                <ExpensesList expenses={expenses} />
            </Card>
        </>
    );
};

export default Expenses;
