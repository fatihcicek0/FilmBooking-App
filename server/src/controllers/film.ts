import { Request, Response } from 'express';
import { Film } from '../models/film';
import { FilmService } from '../services/filmService';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservationService';

interface MulterRequest extends Request {
    file: any;
}

const addFilm = async (req: Request, res: Response): Promise<any> => {
    const { name, price, seatQuantity } = req.body;
    const img = (req as MulterRequest).file;
    const newFilm = new Film();
    newFilm.name = name;
    newFilm.price = price;
    newFilm.seatQuantity = seatQuantity;
    newFilm.img = img.filename;

    FilmService.saveFilm(newFilm)
        .then(() => {
            res.send({
                message: 'successful !'
            })
        }).catch(err => { console.log(err) });
}

const getFilmById = async (req: Request, res: Response): Promise<any> => {
    const { filmId } = req.params;
    try {
        const film = await FilmService.getFilmById(Number(filmId));
        const filmDetail = {
            name: film[0].name,
            price: film[0].price,
            seatQuantity: film[0].seatQuantity,
            img: film[0].img
        };
        const reservations = film.map(f => {
            return {
                userId: f.userId,
                filmId: f.filmId,
                seatNumber: f.seatNumber
            }
        });

        res.send({
            filmDetail,
            reservations
        });
    } catch (err) {
        console.log(err);
    }
}

const getFilms = async (req: Request, res: Response): Promise<any> => {
    console.log("asd");
    try {
        const films = await FilmService.getFilms();
        res.send(films);
    } catch (err) {
        console.log(err);
    }
}
const addReservation = async (req: Request, res: Response): Promise<any> => {
    const { filmId, userId, seatNumber } = req.body;
    const newReservation = new Reservation();
    newReservation.filmId = filmId;
    newReservation.userId = userId;
    newReservation.seatNumber = seatNumber;

    ReservationService.saveSeat(newReservation)
        .then(() => {
            res.send({
                message: "successful"
            })
        }).catch(err => {
            console.log(err);
        });
}
const getReservationsByUserId = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    try {
        const reservations = await ReservationService.getReservationsByUserId(userId);
        res.send({
            reservations
        })
    } catch (err) {
        console.log(err);
    }
}

export default { getReservationsByUserId, addReservation, getFilms, getFilmById, addFilm };