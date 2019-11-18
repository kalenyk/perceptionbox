import React from 'react';

import { Container, Card,CardItem, Text , Body} from 'native-base';

const Item = ({item,index}) => {
    const ItemArrayBody = () => {
        return item.data.map(obj => {
            const entries = Object.entries(obj);
            return entries.map(entry => <Text>{entry[0]}: {entry[1]}</Text>);
        })
    }
    const ItemBody = () => Array.isArray(item.data) ? <ItemArrayBody/>: <Text>{item.data}</Text>;
    return (
        <Card key={index}>
            <CardItem header>
                <Text>{item.field}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <ItemBody/>
                </Body>
            </CardItem>
        </Card>
    )
}

export default Item;