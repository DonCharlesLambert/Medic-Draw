import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';

export default class WholeBodyScreen extends React.Component {
    static navigationOptions = {
        title: 'Body',
        };
        
    render() {
      return (
        // <ScrollView style={{flex: 1}}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300 }}>
          <ImageBackground style = {styles.background} source={require('../../img/head.png')}>
            <RadiusBtn
                btnName='Larynx'
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
                onPress={() => this.props.navigation.navigate('LarynxPic')}
            />
          </ImageBackground>
        </View>
        // </ScrollView>

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
  