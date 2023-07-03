import connection from '../db/db'
import { Film } from '../models/film';
import { Reservation } from '../models/reservation';

interface romanType {
    [key: number]: any;
}



export class FilmService {

    static saveFilm(film: Film): Promise<any> {
        return connection.query('INSERT INTO films(name,seatQuantity,price,img) values(?,?,?,?)', [film.name, film.seatQuantity, film.price, film.img]);
    }
    static async getFilms(): Promise<Film[]> {
        const films: romanType = await connection.query('SELECT * FROM films');
        return films[0];
    }
    static async getFilmById(id: number): Promise<(Film & Reservation)[]> {
        // const film:romanType=await connection.query('SELECT * FROM films WHERE films.id=?',[id]);
        const film: romanType = await connection.query('SELECT * FROM films INNER JOIN reservations ON films.id=reservations.filmId WHERE films.id=?;', [id]);
        return film[0];
    }
}