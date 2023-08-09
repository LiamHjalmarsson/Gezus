import { useState } from "react";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";

import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState("");
    let [dueDate, setDueDate] = useState("");

    let [currency, setCurrency] = useState("SEK");

    let submitHandler = (e) => {
        e.preventDefault();

        let payload = {
            title,
            amount,
            dueDate,
            currency
        }

        props.addExpense(payload);

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

    let currencyHandler = (e) => {
        setCurrency(e.target.value);
    }

    return (
        <>
            <form method="POST" onSubmit={submitHandler} className={style.form}>
                <div className={style.inputContainer}>
                    <Input 
                        label="Title" 
                        input={{ 
                            id: "title",
                            placeholder: "Enter title of expense",
                            type: "text",
                            value: title,
                            onChange: titleChangeHandler
                        }}
                        error={props.error.title ? props.error.title : ""}
                    />

                    <Input 
                        label="Amount" 
                        input={{ 
                            id: "amount", 
                            placeholder: "Enter the amount of expense",
                            type: "number",
                            min: 0,
                            value: amount,
                            onChange: amountChangeHandler
                        }}
                        error={props.error.amount ? props.error.amount : undefined}
                        custom={style.customInput}
                    />
                    
                    <Input 
                        label="Due Date"  
                        input={{ 
                            id: "dueDate", 
                            type: "date",
                            value: dueDate,
                            onChange: dueDateChangeHandler
                        }}
                        error={props.error.dueDate ? props.error.dueDate : undefined}
                        custom={style.customInput}
                    />

                    <div className={style.container}>
                        <div className={style.selectContainer}>
                            <label> Currency </label>
                            <select value={currency} onChange={currencyHandler} className={style.select}>
                                <option key="SEK" value="SEK"> SEK </option>
                                <option key="EUR" value="EUR"> EUR </option>
                                <option key="USD" value="USD"> USD </option>
                            </select>
                        </div>
                        <div className={style.btnContainer}>
                            <Button button={{ type: "submit" }} custom={style.customButton}>
                                Add new expense
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ExpenseForm;