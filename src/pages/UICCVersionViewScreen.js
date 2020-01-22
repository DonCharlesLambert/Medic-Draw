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
        <View>
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground style = {styles.button}>

                <ModalDropdown
                onSelect = {this.state.UICCVersion} 
                options={this.state.UICCOptions}
                defaultValue = {'Change Version: UICC Version 8'} 
                color = {'#bde0eb'}
                onSelect = {(version) => this.setState({UICCVersion: (String(this.state.UICCOptions[version]))})}
                />
              </ImageBackground>
            </View>
            
            <View style={{flexDirection:'column'}}>
                <Text style={styles.subTitle}>Larynx ({this.state.UICCVersion})</Text>
                <Text style={styles.text}>T1: Tumour 2cm or less in greatest dimension.</Text>
                <Text style={styles.text}>T2: Tumour more than 2cm but not more than 4cm.</Text>
                <Text style={styles.text}>T3: Tumour more than 4cm in or extension to lingual surface or epiglottis.</Text>
                <Text style={styles.text}>T4: Tumour invades any of the following: larynx, deep/extrinsic muscle or tongue. </Text>
              </View>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
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
        width: '50%',
        height: '20%',
        backgroundColor: '#bde0eb',
        alignItems: 'center',
        justifyContent: "center",
        margin: 5,
        marginTop: 20,
        borderRadius: 10,
      },

      title: {
        width: '100%',
        height: '20%',
        backgroundColor: '#bde0eb',
        alignItems: 'center',
        justifyContent: "center",
      },
})
