import style from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={style.container}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input {...props.input} className={`${style.input} ${props.error ? style.inputError  : ""} ${props.custom ? props.custom : ""}`} />
            {
                props.error && <p className={style.error}> {props.error} </p>
            }
        </div>
    );
}

export default Input;