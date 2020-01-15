import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';
import ModalDropdown from 'react-native-modal-dropdown';


export default class WholeBodyScreen extends React.Component {
    static navigationOptions = {
        title: 'UICC',
        };
        
    render() {
      return (
        <View>
              <View style = {{flexDirection: 'column'}}>
              <ImageBackground style = {styles.title}>

                <Text style={{fontSize: 30}}>UICC Version 8</Text>
                </ImageBackground>

                <ImageBackground style = {styles.dropDown}>
              <ModalDropdown 
                options={['UICC Version 8', 'UICC Version 7', 'UICC Version 6','UICC Version 5','UICC Version 4',]} 
                defaultValue = {'Change Version: UICC Version 8'} 
                color = {'#f194ff'}
                onSelect = {(value) => this.setState()}
                />
            </ImageBackground>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.subTitle}>Larynx</Text>
                <Text style={styles.text}>T1: Tumour 2cm or less in greatest dimention.</Text>
                <Text style={styles.text}>T2: Tumour more than 2cm but not more than 4cm.</Text>
                <Text style={styles.text}>T3: Tumour more than 4cm in or extension to lingual surface or epiglottis.</Text>
                <Text style={styles.text}>T4: Tumour invades any of the following: larynx, deep/extrinsic muscle or tongue. </Text>
              </View>
            </View>
            <View style = {{justifyContent: 'center'}, {alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text>Back to Profile</Text>
                </TouchableOpacity>
            </View>
            
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
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'rgb(255, 2, 2)',
        height: 30,
        marginTop: 5,
        marginBottom: 5,
    },
    
    subTitle: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: 5,
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
        width: '50%',
        height: '20%',
        backgroundColor: 'rgb(31, 138, 244)',
        alignItems: 'center',
        justifyContent: "center",
        margin: 5,
        marginTop: 20,
        borderRadius: 10,
      },

      title: {
        width: '100%',
        height: '20%',
        backgroundColor: 'rgb(193, 193, 193)',
        alignItems: 'center',
        justifyContent: "center",
      },
})
