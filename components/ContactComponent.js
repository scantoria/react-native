import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render(){
        return(
            <View>
                <Text>Contact Us</Text>
            </View>
        );
    }
}

export default Contact;