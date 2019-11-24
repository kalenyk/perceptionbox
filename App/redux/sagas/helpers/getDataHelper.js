import {call, put} from 'redux-saga/effects';

export default function ({
    succeedAction,
    failureAction,
    url,
}) {
    return function* ({payload}) {
        try {
            const response = yield call(fetch, `${url}${payload}`);
            const responseBody = yield response.json();
    
            yield put(succeedAction({[payload]:{...responseBody}}))
        }
        catch(error) {
            console.log('error',error)
            yield put(failureAction(error))
        }
    }
}