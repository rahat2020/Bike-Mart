import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        position: 'fixed',
        top: 40,
      
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        fontWeight: '700',
        fontSize:'20px',
        fontFamily:'Lobster',
        resizeMode: 'contain',
    },
    mart:{
        color:'aqua'
    },
    menu: {
        width: 25,
        backgroundColor:'aqua',
        height: 25,
        borderRadius:'10px',
        resizeMode: 'contain',
    },
})

export default styles;