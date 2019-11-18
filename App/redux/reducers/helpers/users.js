import urlParse from 'url-parse';

const getPaginationPage = url => urlParse(url).query.match(/\d+/)[0];

const getCurrentPaginationPage = (previous, next) => {
    if(previous) {
        return Number(getPaginationPage(previous)) + 1;
    }
    return Number(getPaginationPage(next)) - 1;
}

export const parseUsersData = (state,payload) => {
    const {count, previous,next,results} = payload;
    return { 
        ...state,
        isLoading: false,
        usersList: [...results],
        totalUsersCount: count,
        paginationPage: getCurrentPaginationPage(previous,next)
    }
}