import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";
import { loginForm, UserDispatch } from "../../types/user";

function Login() {

    const emptyForm: loginForm = {
        email: '',
        password: ''
    }
    const [form, setForm] = useState(emptyForm);
    const dispatch: UserDispatch = useDispatch();
    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(login(form));
    };
    const onChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <input type="text" onChange={onChange} name="email" value={form.email} placeholder="email"></input>
                <input type="password" onChange={onChange} name="password" value={form.password} placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
