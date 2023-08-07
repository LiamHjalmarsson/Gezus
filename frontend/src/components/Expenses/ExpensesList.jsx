import { useState } from "react";
import Expense from "./Expense/Expense";
import OptionChanger from "./Currency/OptionChanger";
import style from "./ExpensesList.module.css";

const ExpensesList = ({expenses, removeHandeler}) => {
    let [selectedCurrency, setSelectedCurrency] = useState("EUR");
    
    let options = [
        { value: "EUR", label: "Euro (EUR)" },
        { value: "KR", label: "Krona (KR)" },
        { value: "USD", label: "US Dollar (USD)" },
    ];

    return (
        <ul className={style.ul}>
            {
                expenses.length !== 0 && (
                    <>
                        <OptionChanger selectedCurrency={selectedCurrency} changeCurrency={setSelectedCurrency} options={options} />
                    </>
                )
            }
            {expenses.length === 0 ? (
                <h3 className={style.empety}>No Expenses added</h3>
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