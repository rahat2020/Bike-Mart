import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './Styles';
const StyledButton = (props) => {

    const type = props.type;
    const backgroundColor = type === 'primary' ? 'white' : 'black';
    const textColor = type === 'primary' ? 'black' : 'white';
    return (

        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} 
            onPress={()=> {
                    console.warn( 'hey you the btn is pressed')
                }}>
                 <Text style={[styles.text, {color: textColor}]}>Custom Order</Text>
            </Pressable>
           
        </View>
    );
};

export default StyledButton;