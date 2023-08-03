import { useCallback, useEffect, useState } from 'react'
import Card from '../Ui/Card';
import Expense from './Expense';

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
    }, []);

    return (
        <>
            <Card>
                {expenses.map((expense) => (
                    <Expense 
                        key={expense.id} title={expense.title}
                    />
                ))}
            </Card>
        </>
    );
};

export default Expenses;
