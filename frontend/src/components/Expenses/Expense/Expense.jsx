import Card from "../../Ui/Card/Card";
import ExpenseDate from "./ExpenseDate";
import Button from "../../Ui/Button/Button";

import style from "./Expense.module.css";

const Expense = ({detail, removeHandeler, otherCurrency}) => {
    return (
        <li>
            <Card custom={style.customCard}>
                <ExpenseDate detail={detail} />
                <div className={style.title}>
                    {detail.title}
                </div>
                <div className={style.price}>
                    {`${detail.amount} ${detail.currency}`}
                </div>
                {
                    otherCurrency !== undefined && (
                        <div>
                            {`= ${detail.amount} ${otherCurrency}`}
                        </div>
                    )
                }
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