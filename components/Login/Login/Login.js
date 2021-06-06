import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import firebaseConfig from '../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { Text, View } from 'react-native';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    return (
        <View>
            <Text> This is a login page it's coming</Text>
        </View>
    );
};

export default Login;