import { takeLatest,all,takeEvery } from 'redux-saga/effects';

import getFilmWorker from './workers/getFilm';

import {GET_FILM} from '../../constants/films/getFilms';

export default function* (){
    yield all([
        yield takeEvery(GET_FILM, getFilmWorker)
    ])
}