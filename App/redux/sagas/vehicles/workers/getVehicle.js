import {getVehicleSucceed,getVehicleFailure} from '../../../actions/vehicles/getVehicle';
import {put, call} from 'redux-saga/effects';

export default function*({payload}){
    try {
        const response = yield call(fetch, `https://swapi.co/api/vehicles/${payload}`);
        const responseBody = yield response.json();

        yield put(getVehicleSucceed({[payload]:{...responseBody}}))
    }
    catch(error) {
        console.log('error',error)
        yield put(getVehicleFailure(error))
    }
}
