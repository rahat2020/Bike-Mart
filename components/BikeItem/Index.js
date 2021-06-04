import React from 'react';
import styles from './Style';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../StyledButton/Index';

const BikeItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.bike;
  return (
    <View style={styles.cartContainer}>

      <ImageBackground
        source={image}
        style={styles.image}>
      </ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonStyles}>
        <StyledButton type="secondary" content={"custom order"} onPress={() => {
          console.warn("custom order was pressed")
          alert("custom order is pressed")
        }} />

        <StyledButton type="primary" content={"Existing Inventory"} onPress={() => {
          console.warn("Existing inventory was pressed")
          alert("Existing Inventory is pressed")
        }} />
      </View>



    </View>
  );
};

export default BikeItem;