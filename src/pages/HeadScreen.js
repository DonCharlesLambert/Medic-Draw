import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';

export default class WholeBodyScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}
    }

    static navigationOptions = {
      headerShown: false
      };

    // static navigationOptions = {
    //     title: 'Body',
    //     headerStyle: {
    //         backgroundColor: '#bde0eb',
    //     },
    // };

    render() {
        return (
            <ImageBackground style = {styles.background} source={require('../../img/head.png')}>
                <RadiusBtn
                    btnName='Larynx'
                    textStyle= {{color: '#ffffff'}}
                    btnStyle= {{
                        top: '140%',
                        left: '-100%',
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                    }}
                    onPress={() => this.props.navigation.navigate('LarynxPic')}
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
  