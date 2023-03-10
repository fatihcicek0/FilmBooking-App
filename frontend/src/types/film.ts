import { ThunkDispatch } from "redux-thunk";
export interface Film{
    id:number;
    name:string;
    price:number;
    seatQuantity:number;
    img:string;
}
export interface FilmState{
    data:Film[];
    filmDetail:Film;
    loading:boolean;
    error:string;
}

interface GET_FİLMS_START{
    type:"GET_FİLMS_START"
}
interface GET_FİLMS_SUCCESS{
    type:"GET_FİLMS_SUCCESS";
    payload:Film[];
}
interface GET_FİLMS_ERROR{
    type:"GET_FİLMS_ERROR"
}

interface GET_FİLM_START{
    type:"GET_FİLM_START"
}
interface GET_FİLM_SUCCESS{
    type:"GET_FİLM_SUCCESS";
    payload:Film
    ;
}
interface GET_FİLM_ERROR{
    type:"GET_FİLM_ERROR"
}


export type FilmAction= 
| GET_FİLMS_START | GET_FİLMS_SUCCESS | GET_FİLMS_ERROR
| GET_FİLM_START | GET_FİLM_SUCCESS | GET_FİLM_ERROR;
export type FilmDispatch=ThunkDispatch<FilmState,void,FilmAction>