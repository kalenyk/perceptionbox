import {getPlanetSucceed,getPlanetFailure} from '../../../actions/planets/getPlanet';
import {put, call} from 'redux-saga/effects';

export default function*({payload}){
    try {
        const response = yield call(fetch, `https://swapi.co/api/planets/${payload}`);
        const responseBody = yield response.json();

        yield put(getPlanetSucceed({[payload]:{...responseBody}}))
    }
    catch(error) {
        console.log('error',error)
        yield put(getPlanetFailure(error))
    }
}
