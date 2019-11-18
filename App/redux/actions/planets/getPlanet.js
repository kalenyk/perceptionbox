import { createAction } from 'redux-actions';
import * as c from '../../constants/planets/getPlanet';

export const getPlanet = createAction(c.GET_PLANET);
export const getPlanetSucceed = createAction(c.GET_PLANET_SUCCEED);
export const getPlanetFailure = createAction(c.GET_PLANET_FAILURE);