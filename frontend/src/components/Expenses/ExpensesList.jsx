import Expense from "./Expense/Expense";

import style from "./ExpensesList.module.css";

const ExpensesList = ({expenses}) => {
    return (
        <ul className={style.ul}>
            {expenses.map((expense) => (
                <Expense 
                    key={expense.id} 
                    detail={expense}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;