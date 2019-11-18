import React, { useEffect } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import { PropTypes } from 'prop-types'
import { Container, Header, Content, Spinner,Card,Button,Right } from 'native-base';
import Autocomplete from 'App/Components/Autocomplete';

import styles from './UsersScreenStyles';

export default function UsersScreen ({getUsersList,usersList,isGettingUsersList,navigation}) {
  useEffect(() => {
    getUsersList()
  },[])

  redirectToUserProfile = userId => {
    navigation.navigate('UserProfileScreen', {userId})
  }

  {isGettingUsersList &&  (
    <Container style={styles.spinner}>
        <Spinner/>
    </Container>
  )}

    return (
      <Container>
        <Header>
          <Right>
            <Button onPress={getUsersList} transparent>
              <Text>Refresh users</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Autocomplete
            usersList={usersList}
            redirectToUserProfile={redirectToUserProfile}
          />
        </Content>
      </Container>
    )
  }

UsersScreen.propTypes = {
  isGettingUsersList: PropTypes.bool.isRequired,
  getUsersList: PropTypes.func.isRequired,
  usersList: PropTypes.array.isRequired,
}

