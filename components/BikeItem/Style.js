import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    cartContainer: {
        width: '100%',
        // height: '100%',
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: '40px',
        fontWeight: '700',
      },
      subtitleCTA:{
        textDecorationLine:"underline"
      },
      subtitle: {
        fontSize: '16',
        color: 'gray',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonStyles: {
        position: 'absolute',
        width: '100%',
        bottom: '20px'
      }
})

export default styles;