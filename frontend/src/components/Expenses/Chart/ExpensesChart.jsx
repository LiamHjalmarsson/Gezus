import ExpenseChart from "./ExpenseChart";

const ExpensesChart = (props) => {

    let monthsValue = [
        {
            label: "January",
            value: 0
        },
        {
            label: "February",
            value: 0
        },
        {
            label: "Mars",
            value: 0
        },
        {
            label: "April",
            value: 0
        },
        {
            label: "May",
            value: 0
        },
        {
            label: "June",
            value: 0
        },
        {
            label: "July",
            value: 0
        },
        {
            label: "Agustus",
            value: 0
        },
        {
            label: "September",
            value: 0
        },
        {
            label: "Oktober",
            value: 0
        },
        {
            label: "November",
            value: 0
        },
        {
            label: "December",
            value: 0
        },
    ];

    props.expenses.forEach(expense => {
        let month = new Date(expense.dueDate).getMonth() + 1;
        monthsValue[month].value += expense.amount;
    });

    return <ExpenseChart monthAmounts={monthsValue} />;
}

export default ExpensesChart;