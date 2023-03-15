import { Link } from "react-router-dom";
const token: boolean = localStorage.getItem('token') ? true : false;
const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!token ?
                    <>
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                        <li>
                            <Link to="register">Register</Link>
                        </li>
                    </>
                    : <>
                        <li>
                            <Link to="logout">Logout</Link>
                        </li>
                    </>
                }
            </ul>
        </header>
    );
}

export default Header;