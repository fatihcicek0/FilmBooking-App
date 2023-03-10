import { Film, FilmDispatch } from "../../types/film";
import api from "../../utils/api";


export const getFilms =()=> async(dispatch:FilmDispatch)=>{
    dispatch({type:"GET_FİLMS_START"}) 
    try{
      const response= await api().get<Film[]>('/film');
      dispatch({type:"GET_FİLMS_SUCCESS",payload:response.data});
     }catch(err){
        console.log(err);
        dispatch({type:"GET_FİLMS_ERROR"})
     }
}

export const getFilm=(filmId:number)=>async(dispatch:FilmDispatch)=>{
   dispatch({type:"GET_FİLM_START"});
   try{
      const response=await api().get<Film>(`/film/${filmId}`);
      dispatch({type:"GET_FİLM_SUCCESS",payload:response.data});
   }catch(err){
      console.log(err);
      dispatch({type:"GET_FİLM_ERROR"});
   }
}