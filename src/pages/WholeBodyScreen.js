import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';

export default class WholeBodyScreen extends React.Component {
    static navigationOptions = {
        title: 'Body',
        headerStyle: {
            backgroundColor: '#bde0eb',
        },
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: "center",
        alignItems: "center",
      }
})
  