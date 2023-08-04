import Expense from "./Expense/Expense";

import style from "./ExpensesList.module.css";

const ExpensesList = ({expenses, removeHandeler, currency}) => {

    return (
        <ul className={style.ul}>
            {expenses.length === 0 ? (
                <h3>No Expenses added</h3>
            ) : (
                expenses.map((expense) => (
                    <Expense 
                        key={expense.id} 
                        detail={expense}
                        removeHandeler={removeHandeler}
                        currency={currency}
                    />
                ))
            )}
        </ul>
    );
}

export default ExpensesList;