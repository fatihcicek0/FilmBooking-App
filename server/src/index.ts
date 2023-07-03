import express from 'express';
import { UserService } from './services/userService';
import { FilmService } from './services/filmService';
import { Film } from './models/film';
import { Reservation } from './models/reservation';

const app = express();
   const x=async()=>{
    const con:(Film & Reservation )[]=[
        {name:'asd',filmId:123},
        {name:'asd'}
     ]
     let coni:(Film | Reservation)={name:''} ;
     coni
     
     con.map(v=>{
        console.log(v.filmId);
     })
   
   }
   x();


app.listen(3000, () => {
    console.log("connect");
});

