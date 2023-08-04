import { useState } from "react";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";

import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState("");
    let [dueDate, setDueDate] = useState("");

    let submitHandler = (e) => {
        e.preventDefault();

        let expense = {
            title,
            amount,
            dueDate
        }

        props.addExpense(expense);
    }

    let titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    let amountChangeHandler = (e) => { 
        setAmount(parseInt(e.target.value));
    }

    let dueDateChangeHandler = (e) => {
        setDueDate(e.target.value);
    }

    return (
        <>
            <form method="POST" onSubmit={submitHandler} className={style.form}>
                <div className={style.inputContainer}>
                    <Input 
                        label="Title" 
                        input={{ 
                            id: "title",
                            placeholder: "Enter title of the expense",
                            type: "text",
                            value: title,
                            onChange: titleChangeHandler
                        }}
                        error={props.error.title ? props.error.title : undefined}
                    />

                    <Input 
                        label="Amount" 
                        input={{ 
                            id: "amount", 
                            placeholder: "Enter the amount of the expense",
                            type: "number",
                            min: 0,
                            value: amount,
                            onChange: amountChangeHandler
                        }}
                        error={props.error.amount ? props.error.amount : undefined}
                    />

                    <Input 
                        label="Due Date"  
                        input={{ 
                            id: "dueDate", 
                            placeholder: "Enter the due date of the expense",
                            type: "date",
                            value: dueDate,
                            onChange: dueDateChangeHandler
                        }}
                        error={props.error.dueDate ? props.error.dueDate : undefined}
                    />
                </div>

                <Button button={{ type: "submit" }}>
                    Add new expense
                </Button>
            </form>
        </>
    );
}

export default ExpenseForm;