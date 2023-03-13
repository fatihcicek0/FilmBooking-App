import { Film, FilmDispatch, FilmState, Reservation } from "../../types/film";
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
      const response=await api().get<FilmState>(`/film/${filmId}`);
      dispatch({type:"GET_FİLM_SUCCESS",payload:response.data});
   }catch(err){
      console.log(err);
      dispatch({type:"GET_FİLM_ERROR"});
   }
}
export const addReservation=(data:Reservation)=>async (dispatch:FilmDispatch)=>{
   dispatch({type:'ADD_RESERVATİON_START'})
   try{
      const response=await api().post('/reservation',data);
      dispatch({type:"ADD_RESERVATİON_SUCCESS",payload:data});
   }catch(err){
      console.log(err);
   }

}