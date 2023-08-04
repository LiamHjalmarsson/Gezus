const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input {...props.input} />
            {
                <p> 
                    {props.error}
                </p>
            }
        </div>
    );
}

export default Input;