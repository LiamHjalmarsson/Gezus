import { useState } from "react";
import Expense from "./Expense/Expense";
import OptionChanger from "./Currency/OptionChanger";
import style from "./ExpensesList.module.css";
import Button from "../Ui/Button/Button";
import { NavLink } from "react-router-dom";

const ExpensesList = ({expenses, removeHandeler, loading }) => {
    let [selectedCurrency, setSelectedCurrency] = useState("EUR");

    let options = [
        { value: "EUR", label: "Euro (EUR)" },
        { value: "KR", label: "Krona (KR)" },
        { value: "USD", label: "US Dollar (USD)" },
    ];

    return (
        <ul className={style.ul}>
            <OptionChanger selectedCurrency={selectedCurrency} changeCurrency={setSelectedCurrency} options={options} />
            {expenses.length === 0 && !loading && (
                    <>
                        <h3 className={style.empety}>No Expenses added</h3>
                        <NavLink to="/addExpense">
                            Add a Expenses
                        </NavLink>
                    </>
                )
            }
            {expenses.length !== 0 && !loading && (
                expenses.map((expense) => (
                    <Expense 
                        key={expense.id} 
                        detail={expense}
                        removeHandeler={removeHandeler}
                        otherCurrency={selectedCurrency}
                    />
                ))
            )}
        </ul>
    );
}

export default ExpensesList;