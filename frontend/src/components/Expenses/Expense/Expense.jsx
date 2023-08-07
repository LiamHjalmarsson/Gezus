import Card from "../../Ui/Card/Card";
import ExpenseDate from "./ExpenseDate";
import Button from "../../Ui/Button/Button";

import style from "./Expense.module.css";

const Expense = ({detail, removeHandeler, currency}) => {
    return (
        <li>
            <Card custom={style.customCard}>
                <ExpenseDate detail={detail} />
                <div className={style.title}>
                    {detail.title}
                </div>
                <div className={style.price}>
                    {`${detail.amount} ${currency}`}
                </div>
                <Button button={{
                        onClick: () => {
                            removeHandeler(detail.id);
                        }
                    }}
                >
                    Remove expense 
                </Button>
            </Card>
        </li>
    );
}

export default Expense;