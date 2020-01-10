import * as React from 'react';
import {StyleSheet, View, Button, Text, TextInput } from 'react-native';


export default class SelectVersionScreen extends React.Component {

  static navigationOptions = {
    title: 'UICC VERSION',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
              {/* bainuo please work on this page */}
              <Text>Slect UICC version</Text>
              <Button
                title="OK"
                onPress={() => this.props.navigation.navigate('Result')}
              />
            </View>
          );
    }
}