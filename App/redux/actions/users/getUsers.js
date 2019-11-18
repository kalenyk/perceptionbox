import { createAction } from 'redux-actions';
import * as c from '../../constants/users/getUsers';

export const getUsersList = createAction(c.GET_USERS_LIST);
export const getUsersListSucceed = createAction(c.GET_USERS_LIST_SUCCEED);
export const getUsersListFailure = createAction(c.GET_USERS_LIST_FAILURE);