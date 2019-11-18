import configureStore from './CreateStore'

import combinedReducers from 'App/redux/reducers/';
import combinedSagas from 'App/redux/sagas/';

export default () => {
    return configureStore(combinedReducers,combinedSagas);
}