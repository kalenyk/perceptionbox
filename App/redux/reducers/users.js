import { handleActions } from 'redux-actions';

import * as a from 'App/redux/actions/users/getUsers';

import {parseUsersData} from './helpers/users';

const initialState = {
    usersList: [],
    totalUsersCount: 0,
    paginationPage: 1,

    isLoading: false,

    isError: false,
    errorMessage: '',
  };
  
  const usersData = handleActions(
    new Map([

      [
        a.getUsersList,
        (state, { payload }) => ({
          ...state,
          isLoading: true,
        }),
      ],
      [
        a.getUsersListSucceed,
        (state, { payload }) => parseUsersData(state,payload),
      ],
      [
        a.getUsersListFailure,
        (state, { payload, error }) => ({
          ...state,
          isError: true,
          isLoading: false,
          errorMessage: error,
        }),
      ],

    ]),
    initialState
  );
  
  export default usersData;
  