import { handleActions } from 'redux-actions';

import * as a from 'App/redux/actions/vehicles/getVehicle';


const initialState = {
    vehicles: {},
    isLoading: false,
    isError: false,
  };
  
  const vehiclesData = handleActions(
    new Map([

      [
        a.getVehicle,
        (state, { payload }) => ({
          ...state,
          isLoading: true,
        }),
      ],
      [
        a.getVehicleSucceed,
        (state, { payload }) => ({
            ...state,
            isLoading: false,
            vehicles: {...state.vehicles, ...payload}
        }),
      ],
      [
        a.getVehicleFailure,
        (state, { payload, error }) => ({
          ...state,
          isError: true,
          isLoading: false,
        }),
      ],

    ]),
    initialState
  );
  
  export default vehiclesData;
  