import { takeLatest,all } from 'redux-saga/effects';

import getUsersListWorker from './workers/getUsersList';

import {GET_USERS_LIST} from '../../constants/users/getUsers';

export default function* (){
    yield all([
        yield takeLatest(GET_USERS_LIST, getUsersListWorker)
    ])
}