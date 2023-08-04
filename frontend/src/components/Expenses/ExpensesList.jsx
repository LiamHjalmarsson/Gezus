import Expense from "./Expense/Expense";

import style from "./ExpensesList.module.css";

const ExpensesList = ({expenses}) => {

    return (
        <ul className={style.ul}>
            {expenses.length === 0 ? (
                <p>No Expenses added</p>
            ) : (
                expenses.map((expense) => (
                    <Expense 
                        key={expense.id} 
                        detail={expense}
                    />
                ))
            )}
        </ul>
    );
}

export default ExpensesList;