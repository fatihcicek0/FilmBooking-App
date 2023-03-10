import { Film, FilmAction, FilmState } from "../../types/film";

const defaultState: FilmState = {
    data: [] as Film[],
    filmDetail: {} as Film,
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
            return { ...state, loading: false, filmDetail: action.payload }
        case "GET_FİLM_ERROR":
            return { ...state, loading: false, error: "Error fetching film" }
        default:
            return state;
    }
}
export default filmReducer;