import * as React from 'react';
import {CheckBox, View, Button, Text } from 'react-native';

export default class drawingScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
              <Text>Size of the tumour</Text>
              
              <Button
                title="Submit"
                onPress={() => this.props.navigation.navigate('CreateNewPatient')}
              />
            </View>
          );
    }
}