import { handleActions } from 'redux-actions';

import * as a from 'App/redux/actions/planets/getPlanet';


const initialState = {
    planets: {},
    isLoading: false,
    isError: false,
  };
  
  const planetsData = handleActions(
    new Map([

      [
        a.getPlanet,
        (state, { payload }) => ({
          ...state,
          isLoading: true,
        }),
      ],
      [
        a.getPlanetSucceed,
        (state, { payload }) => ({
            ...state,
            isLoading: false,
            planets: {...state.planets, ...payload}
        }),
      ],
      [
        a.getPlanetFailure,
        (state, { payload, error }) => ({
          ...state,
          isError: true,
          isLoading: false,
        }),
      ],

    ]),
    initialState
  );
  
  export default planetsData;
  