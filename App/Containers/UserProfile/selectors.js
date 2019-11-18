import { createSelector } from 'reselect';
import urlParse from 'url-parse';

const getId = url => urlParse(url).pathname.match(/\d+/)[0];

const getUser = (state,userId) => {
    const users = {};
    state.usersData.usersList.forEach(user => {
        const userId = getId(user.url);

        users[userId]={...user}
    });
    return users[userId];
}

const getPlanet = (state, userId) => {
    const homeworldUrl = getUserSelector(state,userId)['homeworld'];
    return getId(homeworldUrl);
}

const getHomeworldName = (state,userId) => {
    const homeworldId = getPlanetSelector(state,userId);
    const {planets} = state.planetsData;

    return planets[homeworldId] ? planets[homeworldId].name : 'N/A'
}

const getVehicleIds = (state,userId) => {
    return getUserSelector(state,userId)['vehicles'].map(url => getId(url));
};

const getVehicleData = (state,userId) => {
    const vehicleIds = getVehicleIdsSelector(state,userId);
    const {vehicles} = state.vehiclesData;

    const data = vehicleIds.map(vehicleId => {
        const vehicle = vehicles[vehicleId];

        return vehicle ? {name: vehicle.name, model: vehicle.model} : {name: 'N/A', model: 'N/A'};
    });
    return data;
};

const getFilmIds = (state,userId) => {
    return getUserSelector(state,userId)['films'].map(url => getId(url));
};

const getFilmsData = (state,userId) => {
    const filmIds = getFilmIds(state,userId);
    const {films} = state.filmsData;

    const data = filmIds.map(filmId => {
        const film = films[filmId];

        return film ? {title: film.title} : {title: 'N/A'};
    });
    return data;
}
const getUserSelector = createSelector(getUser,data=>data);
const getPlanetSelector = createSelector(getPlanet,data=>data);
const getHomeworldNameSelector = createSelector(getHomeworldName, data=>data);
const getVehicleIdsSelector = createSelector(getVehicleIds, data=>data);
const getVehicleDataSelector = createSelector(getVehicleData, data=>data);
const getFilmIdsSelector = createSelector(getFilmIds, data=>data);
const getFilmsDataSelector = createSelector(getFilmsData, data =>data)

export { 
    getUserSelector,
    getPlanetSelector,
    getHomeworldNameSelector,
    getVehicleIdsSelector,
    getVehicleDataSelector,
    getFilmIdsSelector,
    getFilmsDataSelector
}