import { useState } from "react";
import Expense from "./Expense/Expense";
import Card from "../Ui/Card/Card";
import style from "./ExpensesList.module.css";

const ExpensesList = ({expenses, removeHandeler}) => {
    let [selectedCurrency, setSelectedCurrency] = useState("USD");
    
    return (
        <ul className={style.ul}>
            <Card custom={style.customOption}>
                <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="KR">KR</option>
                </select>
            </Card>
            {expenses.length === 0 ? (
                <h3>No Expenses added</h3>
            ) : (
                expenses.map((expense) => (
                    <Expense 
                        key={expense.id} 
                        detail={expense}
                        removeHandeler={removeHandeler}
                        currency={selectedCurrency}
                    />
                ))
            )}
        </ul>
    );
}

export default ExpensesList;