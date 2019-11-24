import React, { useEffect } from 'react'
import {Text } from 'react-native'
import { PropTypes } from 'prop-types'
import { Container, Header, Content, Spinner,Button,Right } from 'native-base';
import Autocomplete from 'App/Components/Autocomplete';

import styles from './UsersScreenStyles';

export default function UsersScreen ({getUsersList,usersList,isGettingUsersList,navigation}) {
  useEffect(() => {
    getUsersList()
  },[])

  redirectToUserProfile = userId => {
    navigation.navigate('UserProfileScreen', {userId})
  }

    return (
      <Container>
        <Header>
          <Right>
              <Button onPress={getUsersList}>
                <Text>Refresh users</Text>
              </Button>
            
          </Right>
        </Header>
        {
          isGettingUsersList ?  (
          <Container style={styles.spinner}>
              <Spinner/>
          </Container>
      ) :
        (
          <Content>
            <Autocomplete
              usersList={usersList}
              redirectToUserProfile={redirectToUserProfile}
            />
          </Content>
        )}
      </Container>
    )
  }

UsersScreen.propTypes = {
  isGettingUsersList: PropTypes.bool.isRequired,
  getUsersList: PropTypes.func.isRequired,
  usersList: PropTypes.array.isRequired,
}

