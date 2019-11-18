import { takeLatest,all,takeEvery } from 'redux-saga/effects';

import getVehicleWorker from './workers/getVehicle';

import {GET_VEHICLE} from '../../constants/vehicles/getVehicle';

export default function* (){
    yield all([
        yield takeEvery(GET_VEHICLE, getVehicleWorker)
    ])
}