import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class About extends Component {

    static navigationOptions = {
        title: 'About'
    }

    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text>About Us</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default About;