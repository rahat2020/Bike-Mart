import React from 'react';
import styles from './Styles';
import { Image, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Bike<Text style={styles.mart}>Mart</Text></Text>

            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};

export default Header;