import * as React from 'react';
import {StyleSheet, View, Button, Text, TextInput } from 'react-native';


export default class ResultScreen extends React.Component {

  static navigationOptions = {
    title: 'Result',
    };

    Exported = () => {
        alert('Data has imported to your album!');
        this.props.navigation.navigate('Menu');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
              <Text>Result shown here</Text>
              <Text>Result shown here</Text>
              <Text>Result shown here</Text>
              <Text>Result shown here</Text>
              <Button
                title="Export As PDF"
                onPress={this.Exported}
              />
            </View>
          );
    }
}