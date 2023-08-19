import { useState, useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import Card from "../../Ui/Card/Card";
import ExpenseForm from "./ExpenseForm";
import Expense from "../Expense/Expense";

import style from "./ExpenseForm.module.css";

const Form = () => {
    let { isError, sendRequest } = useHttp();
    let [expenseAdded, setExpenseAdded] = useState([]);
    let [added, setAdded] = useState(false);
    let [slideOut, setSlideOut] = useState(false);
    let [nextItemId, setNextItemId] = useState(1);

    let addExpenseHandler = (expense) => {
        setSlideOut(true);
        sendRequest(
            {
                url: "http://127.0.0.1:8000/api/expenses",
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(expense)
            },
            (res => {
                    setAdded(true);
                    setExpenseAdded(prevExpense => [res]);

                    let timer = setTimeout(() => {
                        setAdded(false);
                    }, 500) ;
        
                    return () => clearTimeout(timer);
                }
            )
        );
    }

    useEffect(() => {
        if (added) {
            setAdded(false);
        }
    }, [added]);

    useEffect(() => {
        if (slideOut) {
            setTimeout(() => {
                setExpenseAdded([]); // Clear the old expenses after slide out
                setSlideOut(false);
            }, 500); // Wait for the slide-out animation to complete
        }
    }, [slideOut]);

    return (
        <>
            <Card custom={style.customFormCard}>
                <ExpenseForm addExpense={addExpenseHandler} error={isError} />
            </Card>
            <Card custom={`${style.customFormCard} ${added ? style["slide-in"]  : style["slide-out"]}`}>
                {expenseAdded.length !== 0 && (
                        <ul className={style.ul}>
                            {expenseAdded.map((expense) => (
                                <Expense key={expense.id} detail={expense} />
                            ))}
                        </ul>
                )}
            </Card>
        </>
    );
}

export default Form;