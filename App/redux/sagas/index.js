import { all } from 'redux-saga/effects';

import usersList from './users/users';
import planet from './planets/getPlanet';
import vehicle from './vehicles/vehicles';
import film from './films/films';

export default function* combinedSaga(){
    yield all([
        usersList(),
        planet(),
        vehicle(),
        film(),
    ])
}