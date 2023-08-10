import Card from "../../Ui/Card/Card";

import style from "./OptionChanger.module.css";

const OptionChanger = ({selectedCurrency, changeCurrency, options}) => {
    let altOptions = Object.keys(options).map(key => (
        {
            value: key,
            label: key
        }
    ));

    return (
        <Card custom={style.customOption}>
            <select value={selectedCurrency} onChange={changeCurrency}>
                {altOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Card>
    );
}

export default OptionChanger;