import { createAction } from 'redux-actions';
import * as c from '../../constants/films/getFilms';

export const getFilm = createAction(c.GET_FILM);
export const getFilmSucceed = createAction(c.GET_FILM_SUCCEED);
export const getFilmFailure = createAction(c.GET_FILM_FAILURE);