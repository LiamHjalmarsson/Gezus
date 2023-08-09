import { useState } from "react";
import Button from "../Ui/Button/Button";
import Input from "../Ui/Input/Input";
import useHttp from "../../hooks/use-http";

import style from "./Signup.module.css";

const Signup = () => {
    let { isError, isLoading, sendRequest } = useHttp();

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            password,
        };

    };


    let nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    let emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    let passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <form method="POST" onSubmit={submitHandler} className={style.form}>
                <div className={style.inputContainer}>
                    <Input 
                        label="name" 
                        input={{ 
                            id: "name",
                            placeholder: "Enter name",
                            type: "text",
                            value: name,
                            onChange: nameChangeHandler
                        }}
                    />
                    <Input 
                        label="email" 
                        input={{ 
                            id: "email",
                            placeholder: "Enter email",
                            type: "email",
                            value: email,
                            onChange: emailChangeHandler
                        }}
                    />
                    <Input 
                        label="password" 
                        input={{ 
                            id: "password",
                            placeholder: "Enter password",
                            type: "password",
                            value: password,
                            onChange: passwordChangeHandler
                        }}
                    />
                    <div className={style.container}>
                        <div className={style.btnContainer}>
                            <Button button={{ type: "submit" }} custom={style.customButton}>
                                Add new expense
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Signup;