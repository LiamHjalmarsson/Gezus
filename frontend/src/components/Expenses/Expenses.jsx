import { useEffect, useState } from 'react'
import Card from '../Ui/Card/Card';
import ExpensesChart from './Chart/ExpensesChart';
import OptionsChanger from "./Currency/OptionChanger";
import ExpensesList from './ExpensesList';

import style from "./Expenses.module.css";

const Expenses = ({ expenses, removeHandler, isLoading }) => {
    let [selectedCurrency, setSelectedCurrency] = useState("SEK");
    let [currencyRate, setCurrencyRate] = useState(1);
    let [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`);
                let data = await response.json();
                setCurrencyRate(data.rates);
                setOptions(data.rates);
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchCurrencyData();
    }, [selectedCurrency]);

    const changeHandler = (e) => {
        setSelectedCurrency(e.target.value);
    }

    return (
        <div className={style.expensesContainer}>
            <Card custom={style.customCard}>
                <ExpensesChart expenses={expenses} />
            </Card>
            <Card custom={style.customCard}>
                <OptionsChanger selectedCurrency={selectedCurrency} changeCurrency={changeHandler} options={options} />
                <ExpensesList expenses={expenses} remove={removeHandler} loading={isLoading} selectedCurrency={selectedCurrency} currencyRate={currencyRate} />
            </Card>
        </div>
    );
};

export default Expenses;
