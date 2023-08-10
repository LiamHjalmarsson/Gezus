import { useState, useEffect } from "react";
import Card from "../../Ui/Card/Card";
import ExpenseDate from "./ExpenseDate";
import Button from "../../Ui/Button/Button";

import style from "./Expense.module.css";

const Expense = ({detail, removeHandeler, otherCurrency, currencyRate}) => {
    const [remove, setRemove] = useState(false);
    const [animateRemove, setAnimateRemove] = useState(false);

    let equivalent = currencyRate ? (detail.amount / currencyRate[detail.currency]).toFixed(2) : "";

    useEffect(() => {
        if (remove) {
            setAnimateRemove(true);

            let timer = setTimeout(() => {
                removeHandeler(detail.id);
            }, 500) ;

            return () => clearTimeout(timer);
        }
    }, [remove]);

    return (
        <li>
            <Card custom={`${style.customCard} ${remove ? style.remove : ''} ${animateRemove ? style.animateRemove : ''}`}>
                <ExpenseDate detail={detail} />

                <div className={style.title}>
                    {remove ? <p>Removing</p> : detail.title}
                </div>

                <div className={style.price}>
                    {`${detail.amount} ${detail.currency}`}
                </div>

                {otherCurrency !== undefined && (
                    <div>
                        {otherCurrency !== detail.currency && `= ${equivalent} ${otherCurrency}`}
                    </div>
                )}

                <Button button={{
                    onClick: () => {
                        setRemove(true);
                    }
                }}>
                    Remove expense
                </Button>
            </Card>
        </li>
    );
}

export default Expense;