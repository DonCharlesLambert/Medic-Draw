import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Header, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';
import ModalDropdown from 'react-native-modal-dropdown';


export default class WholeBodyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDetail1: '',
      UICCVersion: 'UICC Version 8',
      UICCOptions: ['UICC Version 8', 'UICC Version 7', 'UICC Version 6','UICC Version 5','UICC Version 4',],
    };
    this.specification = '';
  }
    static navigationOptions = {
        title: 'UICC',
        headerStyle: {
          backgroundColor: '#bde0eb',
        },
        };

        fetchData = async (buttonDetail2) => {
            const { navigation } = this.props;  
            const buttonDetail1 = navigation.getParam('buttonDetail1', 'NO');  
            this.setState({
                buttonDetail1: buttonDetail1
            })
            console.log('detail 1', buttonDetail1)
            await fetch('http://127.0.0.1:3000/UICCVersionViewBackend?buttonDetail1='+ buttonDetail1+ '&buttonDetail2=' +buttonDetail2, {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                })
                .then((response) => response.json())
                .then ((res) => {
                    const specification = JSON.parse(res.message);
                    this.setState({
                        specification: specification
                    })
                    ,this.props.navigation.navigate('UICCVersionViewDetai', {
                        specification: specification
                    })
                }
              )     
          }
        
          _onPress(buttonDetail2) {
              this.fetchData(buttonDetail2)
                      }

        
    render() {
    //   const { navigation } = this.props;  
    //   const buttonDetail1 = navigation.getParam('buttonDetail1', 'NO');  
    //   console.log("111",this.state.buttonDetail1)
      return (
       <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
            style = {styles.button}
            onPress={() => this._onPress('Larynx')}
        >
            <Text style = {styles.buttonText}>Larynx</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai', {
                specification: this.state.specification
            })}
        >
            <Text style = {styles.buttonText}>Lip and Oral Cavity</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>Major Salivary Glands</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>Nasopharynx</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>HPV Mediated p16+ Oropharyngeal Cancer</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>Oropharynx p17- and Hypopharynx</Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style = {styles.button}
            onPress={() => this.props.navigation.navigate('UICCVersionViewDetai')}
        >
            <Text style = {styles.buttonText}>Nasal Cavity and Paransal Sinuses</Text>
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
