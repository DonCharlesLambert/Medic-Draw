import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';

export default class WholeBodyScreen extends React.Component {
    static navigationOptions = {
        title: 'Body',
        };
        
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300 }}>
          <ImageBackground style = {styles.background} source={require('../../img/body.png')}>
            <RadiusBtn
                btnName='Head'
                textStyle= {{
                            color: '#ffffff',
                          }}
                btnStyle= {{
                            // backgroundColor: '#9d78ff',
                            // borderColor: '#9d78ff',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                          }}
                onPress={() => this.props.navigation.navigate('Head')}
            />
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
  