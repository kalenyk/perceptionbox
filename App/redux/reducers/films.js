import { handleActions } from 'redux-actions';

import * as a from 'App/redux/actions/films/getFilms';


const initialState = {
    films: {},
    isLoading: false,
    isError: false,
  };
  
  const filmsData = handleActions(
    new Map([

      [
        a.getFilm,
        (state, { payload }) => ({
          ...state,
          isLoading: true,
        }),
      ],
      [
        a.getFilmSucceed,
        (state, { payload }) => ({
            ...state,
            isLoading: false,
            films: {...state.films, ...payload}
        }),
      ],
      [
        a.getFilmFailure,
        (state, { payload, error }) => ({
          ...state,
          isError: true,
          isLoading: false,
        }),
      ],

    ]),
    initialState
  );
  
  export default filmsData;
  