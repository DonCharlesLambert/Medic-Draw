import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Header, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';
import ModalDropdown from 'react-native-modal-dropdown';


export default class WholeBodyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UICCVersion: 'UICC Version 8',
      UICCOptions: ['UICC Version 8', 'UICC Version 7', 'UICC Version 6','UICC Version 5','UICC Version 4',],
    }
  }
    static navigationOptions = {
        title: 'UICC',
        headerStyle: {
          backgroundColor: '#bde0eb',
        },
        };

        
    render() {
      return (
       <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('HeadAndNeck', {
              buttonDetail1: "Head And Neck"})}
        >
            <Text style = {styles.buttonText}>HEAD AND NECK</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('HeadAndNeck', {
              buttonDetail1: "UpperLimb"})}
        >
            <Text style = {styles.buttonText}>UPPER LIMB</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>LOWER LIMB</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>OTHERS</Text>
        </TouchableOpacity>  

       </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00e0db',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },

    dropDown: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#bde0eb',
        marginTop: 5,
        marginBottom: 5,
    },
    
    subTitle: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    text: {
        alignItems: 'flex-start',
        justifyContent: "center",
        margin: 5,
        marginLeft: 10,
        marginBottom: 5,
    },

    button: {
      width: 300,
      height: 50,
      backgroundColor: '#cee8f0',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 5,
      marginTop: 40,
      borderRadius: 15,
  },

      title: {
        width: '100%',
        height: '20%',
        backgroundColor: '#bde0eb',
        alignItems: 'center',
        justifyContent: "center",
      },
});
