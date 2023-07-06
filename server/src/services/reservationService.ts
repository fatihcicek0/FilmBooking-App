import connection from '../db/db'
import { Reservation } from '../models/reservation';

interface romanType {
    [key: number]: any;
}

export class ReservationService {
    static saveSeat(reservation: Reservation): Promise<any> {
        return connection.query('INSERT INTO reservations(userId,filmId,seatNumber) VALUES(?,?,?)', [reservation.userId, reservation.filmId, reservation.seatNumber]);
    }
    static async getSeatsByFilmId(filmId: number): Promise<Reservation[]> {
        const seats: romanType = await connection.query('SELECT * FROM reservations WHERE reservations.filmId=?', [filmId]);
        return seats[0];
    }
    static async getReservationsByUserId(userId: number): Promise<Reservation[]> {
        const reservations: romanType = await connection.query('SELECT seatNumber FROM reservations WHERE reservations.userId=?', [userId]);
        return reservations[0];
    }
}