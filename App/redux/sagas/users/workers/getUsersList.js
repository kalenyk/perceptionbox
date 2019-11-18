import {getUsersListSucceed,getUsersListFailure} from '../../../actions/users/getUsers';
import {put, call,select} from 'redux-saga/effects';

export default function*({payload}){
    try {
        const {usersData} = yield select();
        const queryParams = `/?page=${usersData.paginationPage}`;

        const response = yield call(fetch, `https://swapi.co/api/people${queryParams}`);
        const responseBody = yield response.json();

        yield put(getUsersListSucceed(responseBody))
    }
    catch(error) {
        console.log('error',error)
        yield put(getUsersListFailure(error))
    }
}
