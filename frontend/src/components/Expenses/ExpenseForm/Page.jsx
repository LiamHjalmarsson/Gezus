import { useState } from "react";
import useHttp from "../../../hooks/use-http";
import Card from "../../Ui/Card/Card";
import ExpenseForm from "./ExpenseForm";

import style from "./ExpenseForm.module.css";
import Expense from "../Expense/Expense";

const FormPage = () => {
    let { isLoading, isError, sendRequest } = useHttp();
    let [expenseAdded, setExpenseAdded] = useState([]);

    let addExpenseHandler = async (expense) => {
        sendRequest(
            {
                url: "http://127.0.0.1:8000/api/expenses",
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(expense)
            },
            (res => 
                setExpenseAdded(prevExpense => [...prevExpense, res])
            )
        );
    }

    return (
        <>
            <Card custom={style.customFormCard}>
                <ExpenseForm addExpense={addExpenseHandler} error={isError} />
            </Card>
            {expenseAdded.length !== 0 && (
                <Card custom={style.customFormCard}>
                    <ul className={style.ul}>
                        {expenseAdded.map((expense) => (
                            <Expense key={expense.id} detail={expense} currency="kr" />
                        ))}
                    </ul>
                </Card>
            )}
        </>
    );
}

export default FormPage;