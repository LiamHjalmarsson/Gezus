import style from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={style.container}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input {...props.input} className={style.input} />
            {
                props.error && <p> {props.error} </p>
            }
        </div>
    );
}

export default Input;