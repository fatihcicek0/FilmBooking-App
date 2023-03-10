import { UserState } from "../types/user";
import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import filmReducer from "./reducers/filmReducer";
import { FilmState } from "../types/film";
export interface AppState{
    user:UserState;
    film:FilmState;
}
const rootReducer=combineReducers<AppState>({
  user:userReducer,
  film:filmReducer
});
export default rootReducer;