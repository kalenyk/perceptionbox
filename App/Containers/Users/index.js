import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose';

import {getUsersList} from 'App/redux/actions/users/getUsers';

import {getUsersListSelector} from './selectors';

import UsersScreen from './UsersScreen';

const mapStateToProps = state => ({
    isGettingUsersList: state.usersData.isLoading,
    usersList: getUsersListSelector(state),
});

const mapDispatchToProps = {
    getUsersList,
};

const enhance = compose(
    connect(mapStateToProps,mapDispatchToProps),
);

export default enhance(UsersScreen)