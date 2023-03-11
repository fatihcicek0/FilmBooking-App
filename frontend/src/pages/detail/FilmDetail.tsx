import { FilmDispatch } from "../../types/film";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from "../../store/actions/filmActions";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import './detail.scss'

const FilmDetail = () => {

  const dispatch: FilmDispatch = useDispatch();
  const { filmDetail, reservations } = useSelector((state: AppState) => state.film);
  const { filmId } = useParams();
  useEffect(() => {
    dispatch(getFilm(Number(filmId)));
  }, [])

  const getSeats = (): any => {
    let content: any[] = [];

    for (let i = 0; i < filmDetail.seatQuantity; i++) {
      content.push(
        <div id={`${i + 1}`}
          onClick={seatOnClick}
          className={"seat" + " " + (reservations[i]?.filmId == filmDetail.id ? "reserved" : "")} >
          {i + 1}
        </div>);
    }
    return content;
  };

  const seatOnClick = (e: any) => {

    console.log(e.target.id);

  }


  return (
    <div className="detail">
      <div className="container">
        <div className="banner">
          <img src={filmDetail.img}></img>
        </div>
        <div className="container-seat">
          {getSeats()}
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;