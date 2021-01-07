import React from 'react';
import styles from '../Styles';
import { Text, View, Button } from 'react-native';

const HomeScreen = props =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Hi, how are you?</Text>
            <Button 
                title = 'Login'
                onPress = {()=> props.navigation.navigate("Login")}
            />
        </View>
    );
}

export default HomeScreen;