import{Link} from "react-router-dom";
const Header = () => {
    return (  
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="register">Register</Link>
                </li>
                
            </ul>
        </header>
    );
}
 
export default Header;