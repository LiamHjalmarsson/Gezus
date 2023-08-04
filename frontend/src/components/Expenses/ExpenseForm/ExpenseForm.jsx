import { useRef, useState } from "react";
import Input from "../../../Ui/Input";

const ExpenseForm = (props) => {
    let [title, setTitle] = useState("");
    let titleRef = useRef("");
    let [price, setPrice] = useState("");
    let priceRef = useRef("");

    let submitHandler = (e) => {
        e.preventDefault();

        let expense = {
            title,
            price
        }

        props.addExpense(expense);
    
    }

    let titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    let priceChangeHandler = (e) => { 
        setPrice(parseInt(e.target.value));
    }

    return (
        <>
            <form method="POST" onSubmit={submitHandler}>
                <Input 
                    label="Title" 
                    input={{ 
                        id: "title",
                        ref: titleRef, 
                        placeholder: "Enter title of the expense",
                        type: "text",
                        value: title,
                        onChange: titleChangeHandler
                    }}
                />

                <Input 
                    label="Price" 
                    input={{ 
                        id: "price", 
                        ref: priceRef,
                        placeholder: "Enter the price of the expense",
                        type: "number",
                        value: price,
                        onChange: priceChangeHandler
                    }}
                />

                <button type="submit">
                    Add new expense
                </button>
            </form>
        </>
    );
}

export default ExpenseForm;