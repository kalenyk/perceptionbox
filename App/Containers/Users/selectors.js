import { createSelector } from 'reselect';
import urlParse from 'url-parse';

const getUserId = url => urlParse(url).pathname.match(/\d+/)[0]

const getUsersList = store => {
    return store.usersData.usersList.map(user => ({
        name: user.name,
        id: getUserId(user.url),
    }))
}

export const getUsersListSelector = createSelector(getUsersList, data=>data);