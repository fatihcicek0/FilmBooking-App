import { loginForm, User, UserDispatch } from "../../types/user";
import api from "../../utils/api";

export const login = (creds: loginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const response = await api().post<User>("/login", creds);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        localStorage.setItem('token', response.data.token);
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR" })
    }
}
