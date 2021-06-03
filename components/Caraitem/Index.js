import React from 'react';
import styles from './Style';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../StyledButton/Index';

const CarItem = () => {
    return (
        <View style={styles.cartContainer}>

        <ImageBackground
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.image}>
        </ImageBackground>

        <View style={styles.titles}>
          <Text style={styles.title}>Model05</Text>
          <Text style={styles.subtitle}>Starting at $45,344</Text>
        </View>

        <StyledButton type="secondary"></StyledButton>
      </View>
    );
};

export default CarItem;