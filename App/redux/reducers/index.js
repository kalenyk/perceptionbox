import { combineReducers } from 'redux';

import usersData from './users';
import planetsData from './planets';
import vehiclesData from './vehicles';
import filmsData from './films';

const combinedReducers = combineReducers({
    usersData,
    planetsData,
    vehiclesData,
    filmsData,
});

export default combinedReducers;