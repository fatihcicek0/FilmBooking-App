const express=require('express');
const router=express.Router();
const filmControllers=require('../controllers/film');

router.get('/film',filmControllers.getFilms);

router.get('/film/:filmId',filmControllers.getFilmById);

router.post('/film',filmControllers.addFilm);

router.post('/reservation',filmControllers.addReservation);

module.exports=router;