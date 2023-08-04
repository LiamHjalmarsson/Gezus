import style from "./Button.module.css";

const Button = (props) => {
    return (
        <button 
            {...props.button} 
            className={`${style.button} ${props.custom ? props.custom : ""}`}
        > 
            {props.children} 
        </button>
    );
}

export default Button;