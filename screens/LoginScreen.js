import React from 'react';
import styles from '../Styles';
import { TextInput, View, Button } from 'react-native';

const LoginScreen = props => {
    return(
        <View style = {styles.container}>
            <TextInput
                style = {styles.textField}
                placeholder = 'Username'
            />
            <TextInput
                style = {styles.textField}
                placeholder = 'Password'
            />
            <Button 
                title = 'Login'
                onPress = {()=> props.navigation.navigate("Landing")}
            />
        </View>
    );
}

export default LoginScreen;