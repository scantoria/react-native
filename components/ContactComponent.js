import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function RenderContact(){
    return(
        <Card title="Contact Information">
            <View>
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text>U.S.A.</Text>
                <Text></Text>
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

export default Contact;