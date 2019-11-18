import React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';

import {FlatList,List} from 'react-native';
import { Container, Header, Card,Left,Icon,Button, Text } from 'native-base';
import ListItem from 'App/Components/ListItem';

export default function UserProfile({
    navigation,
    user,
    homeworldId,
    getPlanet,
    planets,
    homeworldName,
    vehicleIds,
    getVehicle,
    vehicles,
    films,
    filmIds,
    vehiclesData,
    filmsData,
    getFilm
}){

    useEffect(()=>{
        if(!planets[homeworldId]) {
            getPlanet(homeworldId);
        }
    },[]);

    useEffect(() => {
        vehicleIds.forEach(vehicleId => {
            if(!vehicles[vehicleId]) {
                getVehicle(vehicleId);
            }
        })
    },[]);

    useEffect(() => {
        filmIds.forEach(filmId => {
            if(!films[filmId]) {
                getFilm(filmId);
            }
        })
    },[]);

    const listData = [
        {
            field: 'name',
            data: user.name
        },
        {
            field: 'height',
            data: user.height,
        },
        {
            field: 'mass',
            data: user.mass,
        },
        {
            field: 'hair color',
            data: user.hair_color,
        },
        {
            field: 'skin color',
            data: user.skin_color,
        },
        {
            field: 'eye color',
            data: user.eye_color,
        },
        {
            field: 'birth year',
            data: user.birth_year,
        },
        {
            field: 'gender',
            data: user.gender,
        },
        {
            field: 'homeworld',
            data: homeworldName,
        },
        {
            field: 'vehicle',
            data: vehiclesData,
        },
        {
            field: 'films',
            data: filmsData,
        }
    ]


    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={()=>navigation.goBack()}>
                        <Text>Back</Text>
                    </Button>
                </Left>
            </Header>

            <FlatList
                data={listData}
                renderItem={({item,index}) => {
                    return (<ListItem item={item} index={index}/>)
                }}
            />
        </Container>
    )
}

UserProfile.propTypes = {
    user: PropTypes.object,
    homeworldId: PropTypes.string,
    getPlanet: PropTypes.func,
    planets: PropTypes.object,
    homeworldName: PropTypes.string,
    vehicleIds: PropTypes.Array,
    getVehicle: PropTypes.func,
    vehicles: PropTypes.object,
    films: PropTypes.object,
    filmIds: PropTypes.array,
    vehiclesData: PropTypes.object,
    filmsData: PropTypes.object,
    getFilm: PropTypes.func,
}