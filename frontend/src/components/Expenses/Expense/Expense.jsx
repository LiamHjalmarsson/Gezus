import Card from "../../Ui/Card";
import ExpenseDate from "./ExpenseDate";

import style from "./Expense.module.css";

const Expense = ({detail, removeHandeler}) => {

    return (
        <li>
            <Card custom={style.customCard}>
                <ExpenseDate detail={detail} />
                <div className={style.title}>
                    <h4>
                        {detail.title}
                    </h4>
                </div>
                <div className={style.price}>
                    {detail.amount}
                </div>
                <button onClick={() => {
                    removeHandeler(detail.id)
                }}>
                    Remove expense 
                </button>
            </Card>
        </li>
    );
}

export default Expense;