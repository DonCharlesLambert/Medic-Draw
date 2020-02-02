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

              {/* <RadiusBtn
                btnName='Shoulder'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '25%',
                    left: '120%',
                    height: 70,
                    width: 70,
                    borderRadius: 40,
                }}
                onPress={() => this.props.navigation.navigate('Head')}
             />

              <RadiusBtn
                btnName='Arm'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '45%',
                    left: '170%',
                    height: 60,
                    width: 60,
                    borderRadius: 40,
                }}
                // onPress={() => this.props.navigation.navigate('Head')}
             />

              <RadiusBtn
                btnName='Belly'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '35%',
                    left: '-10%',
                    height: 60,
                    width: 60,
                    borderRadius: 40,
                }}
                // onPress={() => this.props.navigation.navigate('Head')}
             />

              <RadiusBtn
                btnName='Hand'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '40%',
                    left: '-230%',
                    height: 60,
                    width: 60,
                    borderRadius: 40,
                }}
                // onPress={() => this.props.navigation.navigate('Head')}
             />

              <RadiusBtn
                btnName='Hip'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '31%',
                    left: '-90%',
                    height: 60,
                    width: 60,
                    borderRadius: 40,
                }}
                // onPress={() => this.props.navigation.navigate('Head')}
             />

              <RadiusBtn
                btnName='Leg'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '58%',
                    left: '70%',
                    height: 60,
                    width: 60,
                    borderRadius: 40,
                }}
                // onPress={() => this.props.navigation.navigate('Head')}
             />   

              <RadiusBtn
                btnName='Foot'
                textStyle= {{color: '#ffffff'}}
                btnStyle= {{
                    top: '75%',
                    left: '-90%',
                    height: 60,
                    width: 60,
                    borderRadius: 40,
                }}
                // onPress={() => this.props.navigation.navigate('Head')}
             /> */}
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
  