import {getFilmSucceed,getFilmFailure} from '../../../actions/films/getFilms';
import {put, call} from 'redux-saga/effects';
import getDataHelper from '../../helpers/getDataHelper';

export default getDataHelper(getFilmSucceed,getFilmFailure,'https://swapi.co/api/films/')
// export default function*({payload}){
//     try {
//         const response = yield call(fetch, `https://swapi.co/api/films/${payload}`);
//         const responseBody = yield response.json();
//         yield put(getFilmSucceed({[payload]:{...responseBody}}))
//     }
//     catch(error) {
//         console.log('error',error)
//         yield put(getFilmFailure(error))
//     }
// }
