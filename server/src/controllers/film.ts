import { Request, Response } from 'express';
import { Film } from '../models/film';
import { FilmService } from '../services/filmService';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservationService';

interface MulterRequest extends Request {
    file: any;
}

export const addFilm = async (req: MulterRequest, res: Response): Promise<any> => {
    const { name, price, date, seatQuantity } = req.body;
    const img = req.file;
    const newFilm = new Film();
    newFilm.name = name;
    newFilm.price = price;
    newFilm.seatQuantity = seatQuantity;
    newFilm.img = img.filename;

    try {
        const result = await FilmService.saveFilm(newFilm);
        res.send({
            message: 'successful !'
        })
    } catch (err) {
        console.log(err);
    }
}

exports.getFilmById = async (req:Request, res:Response) => {
    const { filmId } = req.params;
    try {
        const response = await FilmService.getFilmById(Number(filmId));
        console.log(response);
        response.map(a=>{
            a.
        })
        // const response2 = await Reservation.getSeatsByFilmId(filmId);
        // const filmDetail = response[0][0];
        // const reservations = response2[0];
        // console.log(reservations);
         
        // res.send({
        //     filmDetail,
        //     reservations
        // });
    } catch (err) {
        console.log(err);
    }
}

export const getFilms = async (req: Request, res: Response): Promise<any> => {
    try {
        const films = await FilmService.getFilms();
        res.send(films);
    } catch (err) {
        console.log(err);
    }
}
export const addReservation = async (req: Request, res: Response): Promise<any> => {
    const { filmId, userId, seatNumber } = req.body;
    const newReservation = new Reservation();
    newReservation.filmId = filmId;
    newReservation.userId = userId;
    newReservation.seatNumber = seatNumber;

    try {
        const response = await ReservationService.saveSeat(newReservation);
        res.send({
            message: "successful"
        })
    } catch (err) {
        console.log(err);
    }
}
export const getReservationsByUserId=async(req:Request,res:Response)=>{
    const  userId  = Number(req.params.userId);
    try{
        const reservations = await ReservationService.getReservationsByUserId(userId);
        res.send({
            reservations
        })

    }catch(err){
        console.log(err);
    }
}