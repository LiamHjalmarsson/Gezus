import Expense from "./Expense/Expense";
import style from "./ExpensesList.module.css";
import { NavLink } from "react-router-dom";

const ExpensesList = ({expenses, removeHandler, loading, selectedCurrency, currencyRate }) => {
    return (
        <ul className={style.ul}>
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
                        currencyRate={currencyRate}
                        removeHandeler={removeHandler}
                        otherCurrency={selectedCurrency}
                    />
                ))
            )}
        </ul>
    );
}

export default ExpensesList;