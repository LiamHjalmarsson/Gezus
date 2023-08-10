import ChartBar from "./ChartBar";
import style from "./ExpenseChart.module.css";

const ExpenseChart = ({ monthAmounts }) => {
    let dataAmounts = monthAmounts.map(amount => amount.value);
    let total = Math.max(...dataAmounts);

    return (
        <div className={style.chart}>
            {
                monthAmounts.map(item =>
                    <ChartBar key={item.label} value={item.value} maxValue={total} label={item.label} />
                )
            }
        </div>
    )
}

export default ExpenseChart;