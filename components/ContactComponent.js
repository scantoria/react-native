import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function RenderContact(){
    return(
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                <View>
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text style={styles.lineBreak}>U.S.A.</Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                </View>
            </Card>
        </Animatable.View>
    );
}
class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return <RenderContact />;
    }
}

const styles = StyleSheet.create ({
    lineBreak: {
        marginBottom: 10
    },
    cardWrapper: {
        margin: 20
    }
});

export default Contact;