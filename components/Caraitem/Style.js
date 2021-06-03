import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    cartContainer: {
        width: '100%',
        height: '100%',
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
      subtitle: {
        fontSize: '16',
        color: 'gray',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      }
})

export default styles;