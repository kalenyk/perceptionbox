import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose';

import {getUserSelector, getPlanetSelector, getHomeworldNameSelector,getFilmIdsSelector,getFilmsDataSelector, getVehicleIdsSelector,getVehicleDataSelector} from './selectors';

import {getPlanet} from 'App/redux/actions/planets/getPlanet';
import {getVehicle} from 'App/redux/actions/vehicles/getVehicle';
import {getFilm} from 'App/redux/actions/films/getFilms';

import UserProfile from './UserProfile';

const mapStateToProps = (state,ownProps) => ({
    usersData: state.usersData,
    user: getUserSelector(state,ownProps.navigation.getParam('userId')),

    homeworldId: getPlanetSelector(state,ownProps.navigation.getParam('userId')),
    homeworldName: getHomeworldNameSelector(state,ownProps.navigation.getParam('userId')),
    planets: state.planetsData.planets,

    vehicleIds: getVehicleIdsSelector(state,ownProps.navigation.getParam('userId')),
    vehiclesData: getVehicleDataSelector(state,ownProps.navigation.getParam('userId')),
    vehicles: state.vehiclesData.vehicles,

    films: state.filmsData.films,
    filmIds: getFilmIdsSelector(state,ownProps.navigation.getParam('userId')),
    filmsData: getFilmsDataSelector(state,ownProps.navigation.getParam('userId'))
});

const mapDispatchToProps = {
    getPlanet,
    getVehicle,
    getFilm,
};

const enhance = compose(
    connect(mapStateToProps,mapDispatchToProps),
);

export default enhance(UserProfile)