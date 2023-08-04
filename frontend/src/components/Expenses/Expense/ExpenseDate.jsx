import style from "./expenseDate.module.css";

const ExpenseDate = ({detail}) => {
    let expenseDate = new Date(detail.dueDate);

    let month = expenseDate.toLocaleString("en-US", { month: "long" });
    let year = expenseDate.getFullYear();
    let date = expenseDate.getDate();

    return (
        <div className={style.expenseDate}>
            <div>
                {month}
            </div>
            <div>
                {year}
            </div>
            <div>
                {date}
            </div>
        </div>
    );
}

export default ExpenseDate;