import { useEffect, useState } from 'react'

import useHttp from '../../hooks/use-http';
import Card from '../Ui/Card/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './Chart/ExpensesChart';
import OptionsChanger from "./Currency/OptionChanger";

import style from "./Expenses.module.css";

const Expenses = (props) => {
    let [expenses, setExpenses] = useState([]);
    let { isLoading, isError, sendRequest } = useHttp();

    let [selectedCurrency, setSelectedCurrency] = useState("SEK");
    let [currencyRate, setCurrencyRate] = useState(1); // Default value is 1 for the same currency

    let options = [
        { value: "EUR", label: "Euro (EUR)" },
        { value: "SEK", label: "Krona (SEK)" },
        { value: "USD", label: "US Dollar (USD)" },
        { value: "DKK", label: "DKK (DKK)" },
    ];

    useEffect(() => {
        sendRequest(
            {
                url: "http://127.0.0.1:8000/api/expenses"  
            },
            (recourse => {
                setExpenses(recourse);
            })
        );
    }, [sendRequest]);

    let removeHandler = (id) => {
        sendRequest(
            {
                url: `http://127.0.0.1:8000/api/expenses/${id}`,
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            },
            (() => 
                setExpenses(prevExpenses => {
                    return prevExpenses.filter(expense => expense.id !== id);
                })
            )
        );
    }

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`);
                let data = await response.json();
                setCurrencyRate(data.rates);
            } catch (error) {
                // Handle error
                console.error('Error fetching currency data:', error);
            }
        };

        fetchCurrencyData();
    }, [selectedCurrency]);

    const changeHandler = (e) => {
        setSelectedCurrency(e.target.value);
    }

    return (
        <>
            <div className={style.expensesContainer}>
                <Card custom={style.customCard}>
                    <ExpensesChart expenses={expenses}/>
                </Card>
                <Card custom={style.customCard}>
                    <OptionsChanger selectedCurrency={selectedCurrency} changeCurrency={changeHandler} options={options} />
                    <ExpensesList expenses={expenses} removeHandler={removeHandler} loading={isLoading} selectedCurrency={selectedCurrency} currencyRate={currencyRate}/>
                </Card>
            </div>
        </>
    );
};

export default Expenses;
