import { NavLink } from "react-router-dom";
import Button from "../Ui/Button/Button";
import style from "./Navigation.module.css";

const Navigation = () => {
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
                        <NavLink to="/add">
                            Add Expenses
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <Button custom={style.userBtn}>
                        User
                    </Button>
                </div>
            </header>
        </>
    );
}

export default Navigation;