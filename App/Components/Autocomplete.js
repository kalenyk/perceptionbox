import React, {useState,useEffect} from 'react';

import {View,TouchableOpacity} from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import {Card,Text} from 'native-base';


export default function Autocomplete({usersList, redirectToUserProfile}) {

    const [autocompleteValue, setAutocomplete] = useState('');
    const filteredData = usersList.filter(user => {
        if(user.name.toLowerCase().includes(autocompleteValue.toLowerCase())){
            return user;
        }
    });

    return (
        <View>
            <AutocompleteInput
                data={filteredData}
                renderItem={({item,index}) => (
                    <TouchableOpacity onPress={()=>redirectToUserProfile(item.id)}  key={item.id}>
                        <Card>
                            <Text>{item.name}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                placeholder="Choose character"
                onChangeText={text => setAutocomplete(text)}
            />
        </View>
    )
}