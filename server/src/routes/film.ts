import express, { Router } from 'express'
const router: Router = express.Router();
import filmControllers from '../controllers/film'

router.get('/film', filmControllers.getFilms);

router.get('/film/:filmId', filmControllers.getFilmById);

router.get('/reservation/:userId', filmControllers.getReservationsByUserId);

router.post('/film', filmControllers.addFilm);

router.post('/reservation', filmControllers.addReservation);

export = router;