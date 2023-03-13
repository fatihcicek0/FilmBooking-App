const Film = require("../models/film");
const Reservation = require("../models/reservation");


exports.addFilm = async (req, res) => {
    const { name, price, date, seatQuantity } = req.body;
    const img = req.file;
    const newFilm = new Film();
    newFilm.name = name;
    newFilm.price = price;
    newFilm.date = date;
    newFilm.seatQuantity = seatQuantity;
    newFilm.img = img.filename;

    try {
        const result = await newFilm.saveFilm();
        res.send({
            message: 'successful !'
        })
    } catch (err) {
        console.log(err);
    }
}
exports.getFilms = async (req, res) => {
    try {
        const response = await Film.getFilms()
        const films = response[0]
        res.send(films);
    } catch (err) {
        console.log(err);
    }

}
exports.getFilmById = async (req, res) => {
    const { filmId } = req.params;
    try {
        const response = await Film.getFilmById(filmId);
        const response2 = await Reservation.getSeatsByFilmId(filmId);
        const filmDetail = response[0][0];
        const reservations = response2[0];
        console.log(reservations);
        res.send({
            filmDetail,
            reservations
        });
    } catch (err) {
        console.log(err);
    }
}
exports.addReservation = async (req, res) => {
    const { filmId, userId, seatNumber } = req.body;
    console.log(req.body);
    const newReservation = new Reservation();
    newReservation.filmId = filmId;
    newReservation.userId = userId;
    newReservation.seatNumber = seatNumber;
 
    try {
        const response = await newReservation.saveSeat();
        res.send({
            message: "successful"
        })
    } catch (err) {
        console.log(err);
    }
}