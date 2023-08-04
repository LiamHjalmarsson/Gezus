import { useState } from "react";
import Input from "../../../Ui/Input";
import { parse } from "dotenv";

const ExpenseForm = (props) => {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState("");
    let [dueDate, setDueDate] = useState("");

    console.log(props.error);
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
            <form method="POST" onSubmit={submitHandler}>
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

                <button type="submit">
                    Add new expense
                </button>
            </form>
        </>
    );
}

export default ExpenseForm;