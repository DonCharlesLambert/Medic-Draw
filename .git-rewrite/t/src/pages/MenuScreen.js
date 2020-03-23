import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Menu',
        };
        
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300 }}>
          <Button
            title="Create New Patient"
            onPress={() => this.props.navigation.navigate('CreateNewPatient')}
          />

          <Button
            title="Edit Existing Patient"
            onPress={() => this.props.navigation.navigate('CreateNewPatient')}
          />
        </View>
      );
    }
  }
  