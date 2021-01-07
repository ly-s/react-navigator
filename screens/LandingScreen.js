import React from 'react';
import styles from '../Styles';
import { Text, View } from 'react-native';

const LandingScreen = () =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome!</Text>
        </View>
    );
}

export default LandingScreen;