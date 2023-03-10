import { FilmDispatch } from "../types/film";
import{useDispatch} from 'react-redux';
import{useEffect} from 'react';
import{useParams} from 'react-router-dom';
import { getFilm } from "../store/actions/filmActions";

const FilmDetail = () => {

 const dispatch:FilmDispatch=useDispatch();
 const filmId=useParams() ;
useEffect(()=>{
    dispatch(getFilm(Number(filmId)))
},[])

    const getAnimalsContent = () => {
        let content: any[] = [];
    
        for (let i = 0; i < 10; i++) {
    
          content.push(<li value={i}></li>);
        }
        return content;
      };
    
    
      return (
        <div>
          {getAnimalsContent()}
        </div>
    
      );
}
 
export default FilmDetail;