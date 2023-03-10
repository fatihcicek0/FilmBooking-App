const Film = require("../models/film");

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
    const filmId = req.params;
    try {
        const response = await Film.getFilmById(filmId);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}