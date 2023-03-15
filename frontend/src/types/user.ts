import { ThunkDispatch } from "redux-thunk";

export interface userReservations{
    name:string;
    seatNumber:number;
    price:number;
}

export interface User {
    userId:string;
    name: string;
    email: string;
    password: string;
    token: string;
}
export interface UserState{
    data:User;
    userReservations:userReservations[];
    loading:boolean,
    error:string
}
export interface loginForm {
    email: string,
    password: string
}

interface LOGIN_START {
    type: "LOGIN_START";
}
interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: User;
}
interface LOGIN_ERROR {
    type: "LOGIN_ERROR";
}
interface LOGOUT {
    type: "LOGOUT";
}
export type UserAction = |LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR | LOGOUT;
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>
