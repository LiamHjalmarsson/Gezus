import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../Ui/Button/Button";
import style from "./Navigation.module.css";

const Navigation = () => {
    let [activeUser, setActiveUser] = useState(false);

    let userHandeler = () => {
        setActiveUser(!activeUser);
    }

    return (
        <>
            <header className={style.header}>
                <NavLink to="/">
                    Gesuz
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/">
                            Expenses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/addExpense">
                            Add Expenses
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <Button custom={style.userBtn} button={{ onClick: userHandeler }}>
                        Sign up
                    </Button>
                    <div className={`${style.slideContainer} ${activeUser ? style.slideIn : style.slideOut}`}>
                        <NavLink to="/signup" onClick={() => setActiveUser(false)}> 
                            Signup 
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navigation;