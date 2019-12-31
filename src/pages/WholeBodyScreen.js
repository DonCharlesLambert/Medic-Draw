import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

export default class WholeBodyScreen extends React.Component {
    static navigationOptions = {
        title: 'Body',
        };
        
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300 }}>
          <ImageBackground style = {styles.background} source={require('../../img/body.png')}>

          </ImageBackground>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
      }
})
  