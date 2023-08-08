import Button from "../Ui/Button/Button";
import Input from "../Ui/Input/Input";

import style from "./Signup.module.css";

const Signup = () => {
    return (
        <div className={style.container}>
            <form className={style.form}>
                <div className={style.box}>
                    <Input
                        label="Username"
                        input={{
                            id: "Username",
                            placeholder: "Enter Username",
                            type: "text",
                        }}
                    />
                    <Input
                        label="Password"
                        input={{
                            id: "Password",
                            placeholder: "Enter Password",
                            type: "text",
                        }}
                    />
                </div>
                <div className={style.btnContainer}>
                    <Button>
                        Login 
                    </Button>
                    <Button>
                        Cancel 
                    </Button>
                    <Button>
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Signup;