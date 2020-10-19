import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

function RenderContact(){
    return(
        <Card title="Contact Information" wrapperStyle={{margin: 20}}>
            <View>
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={styles.lineBreak}>U.S.A.</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </View>
        </Card>
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