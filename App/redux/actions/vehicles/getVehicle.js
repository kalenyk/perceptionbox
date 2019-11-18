import { createAction } from 'redux-actions';
import * as c from '../../constants/vehicles/getVehicle';

export const getVehicle = createAction(c.GET_VEHICLE);
export const getVehicleSucceed = createAction(c.GET_VEHICLE_SUCCEED);
export const getVehicleFailure = createAction(c.GET_VEHICLE_FAILURE);