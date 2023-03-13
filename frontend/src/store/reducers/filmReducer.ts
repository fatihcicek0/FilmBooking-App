import { act } from "react-dom/test-utils";
import { Film, FilmAction, FilmState, Reservation } from "../../types/film";

const defaultState: FilmState = {
    data: [] as Film[],
    filmDetail: {} as Film,
    reservations: [] as Reservation[],
    loading: false,
    error: ""
}

const filmReducer = (state: FilmState = defaultState, action: FilmAction) => {
    switch (action.type) {
        case "GET_FİLMS_START":
            return { ...state, loading: true, error: "" }
        case "GET_FİLMS_SUCCESS":
            return { ...state, loading: false, data: action.payload }
        case "GET_FİLMS_ERROR":
            return { ...state, loading: false, error: "Error fetching films" }
        case "GET_FİLM_START":
            return { ...state, loading: true, error: "" }
        case "GET_FİLM_SUCCESS":
            return { ...state, loading: false, filmDetail: action.payload.filmDetail, reservations: action.payload.reservations }
        case "GET_FİLM_ERROR":
            return { ...state, loading: false, error: "Error fetching film" }
        case "ADD_RESERVATİON_START":
            return { ...state, loading: true, error: "" }
        case "ADD_RESERVATİON_SUCCESS":
            return { ...state,reservations:[...state.reservations,action.payload] }
        case "ADD_RESERVATİON_ERROR":
            return { ...state, loading: false, error: "Error fetching reservation" }
        default:
            return state;
    }
}
export default filmReducer;