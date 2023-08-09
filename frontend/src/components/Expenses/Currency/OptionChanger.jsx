import Card from "../../Ui/Card/Card";

import style from "./OptionChanger.module.css";

const OptionChanger = ({selectedCurrency, changeCurrency, options}) => {
    return (
        <Card custom={style.customOption}>
            <select value={selectedCurrency} onChange={changeCurrency}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Card>
    );
}

export default OptionChanger;