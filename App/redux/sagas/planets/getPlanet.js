import { takeLatest,all } from 'redux-saga/effects';

import getPlanetWorker from './workers/getPlanet';

import {GET_PLANET} from '../../constants/planets/getPlanet';

export default function* (){
    yield all([
        yield takeLatest(GET_PLANET, getPlanetWorker)
    ])
}