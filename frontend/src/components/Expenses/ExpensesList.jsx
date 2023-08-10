import useHttp from "../../hooks/use-http";
import Expense from "./Expense/Expense";
import style from "./ExpensesList.module.css";
import { NavLink } from "react-router-dom";

const ExpensesList = ({expenses, remove, loading, selectedCurrency, currencyRate }) => {
    let {sendRequest} = useHttp();

    let removeHandeler = (id) => {
        sendRequest(
            {
                url: `http://127.0.0.1:8000/api/expenses/${id}`,
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            },
            (
                () => remove(id)
            )
        );
    }

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
                        removeHandeler={removeHandeler}
                        otherCurrency={selectedCurrency}
                    />
                ))
            )}
        </ul>
    );
}

export default ExpensesList;