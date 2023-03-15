import { Link } from "react-router-dom";
import { Film, FilmDispatch } from "../../types/film";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFilms } from "../../store/actions/filmActions";
import { AppState } from "../../store";
import './home.scss'
const Home = () => {
  const dispatch: FilmDispatch = useDispatch();
  const { data } = useSelector((state: AppState) => state.film);

  useEffect(() => {
    dispatch(getFilms());
    console.log(data);
  }, [])

  return (
    <div className="Home">
      {data.map(f => {
        console.log(f.id);
        return (
          <Link to={`/film/${f.id}`}>
            <div key={f.name} className="card">
              <img width="170" src={f.img}></img>
              <h3>{f.name}</h3>
              <p>Price : {f.price} $</p>
            </div>
          </Link>
        )
      })}
    </div>

  );
}


export default Home;
