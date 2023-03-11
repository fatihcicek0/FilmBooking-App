import { FilmDispatch } from "../../types/film";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from "../../store/actions/filmActions";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const FilmDetail = () => {

  const dispatch: FilmDispatch = useDispatch();
  const { filmDetail,reservations } = useSelector((state: AppState) => state.film);
  const { filmId } = useParams();
  useEffect(() => {
    dispatch(getFilm(Number(filmId)));
  }, [])

  const getSeats = () => {
    
   // console.log(reservations && reservations[0] );
    let content: any[] = [];
    console.log(reservations[0]);

    for (let i = 0; i < filmDetail.seatQuantity; i++) {

      content.push(<div className={ "seat" + (reservations[i].filmId==filmDetail.id ? "reserved" :"")  } style={{width:20,height:20,backgroundColor:'black'}} ></div>);
    }
    return content;
  };


  return (
    <div>
      <div style={{ width: 100 }}>
        {getSeats()}
      </div>
    </div>
  );
}

export default FilmDetail;