import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import BikeItem from '../BikeItem/Index';
import styles from './Styles'
import bikes from './Bikes';
const BikeList = () => {
    console.log(bikes)
    return (
        <View style={styles.container}>
            <FlatList data={bikes} 
            renderItem={({item}) => <BikeItem bike={item}/>}
            
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
                   
        </View>
    );
};

export default BikeList;