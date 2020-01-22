import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';

export default class WholeBodyScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}
    }

    static navigationOptions = {
        title: 'Body',
        headerStyle: {
          backgroundColor: '#bde0eb',
      },
        };

    render() {
      return (
          <ImageBackground style = {styles.background} source={require('../../img/body.png')}>
             <RadiusBtn
                btnName='Head'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '15%',
                    left: '-10%',
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                }}
                onPress={() => this.props.navigation.navigate('Head')}
             />
          </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})
  