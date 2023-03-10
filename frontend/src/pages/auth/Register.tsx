import { useState } from "react";
import api from "../../utils/api";
import {useNavigate} from "react-router-dom"
function Register() {
    const navigate=useNavigate();
    interface registerForm {
        name: string,
        email: string,
        password: string
    }
    const [form, setForm] = useState<registerForm>({ name: '', email: '', password: '' });

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await api().post('/register', form);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };
    const onChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Register</h2>
                <input type="text" onChange={onChange} name="name" value={form.name} placeholder="name"></input>
                <input type="text" onChange={onChange} name="email" value={form.email} placeholder="email"></input>
                <input type="password" onChange={onChange} name="password" value={form.password} placeholder="password"></input>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
