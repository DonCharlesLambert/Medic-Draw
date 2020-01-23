import * as React from 'react';
import {StyleSheet, View, Button, Text, Image, Alert, TouchableOpacity} from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";


export default class ResultScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          UICCVersion: 'UICC Version 8',
          UICCOptions: ['UICC Version 8', 'UICC Version 7', 'UICC Version 6','UICC Version 5','UICC Version 4',],
          name: "John Doe",
          age: 64,
      }
  }

  static navigationOptions = {
    title: 'Result',
    };

    Exported = () => {
        alert('Data has imported to your album! Thank You!');
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <ModalDropdown
                    style = {styles.button}
                    options={this.state.UICCOptions}
                    defaultValue = {'Change Version: UICC Version 8'}
                    color = {'#bde0eb'}
                    onSelect = {(version) => this.setState({UICCVersion: (String(this.state.UICCOptions[version]))})}
                />

                <View>
                    <Text style= {styles.textBold}>Patient Data:</Text>
                        <Text>The patient, {this.state.name} is {this.state.age} years old and has been
                        diagnosed with cancer in the Larynx</Text>

                    <Text style= {[styles.textBold, {marginTop: '5%'}]}>Qualifying Conditions:</Text>
                        <Text>Tumour more than 4cm in or extension to lingual surface of epiglottis.
                        The tumour is also on the upper side of the Larynx.</Text>

                    <Text style= {styles.textBold}>According to {this.state.UICCVersion},
                        this, along with the drawings, has classified the tumour level as T3</Text>
                </View>

                <View style={{width: '100%'}}>
                    <Text style= {styles.textBold}>Drawing:</Text>
                    <Image style={{height: 250, resizeMode: "contain"}} source = {require('../../img/larynx.png')}/>
                </View>
                <TouchableOpacity
                    style = {styles.button}
                    onPress={() => this.Exported()}
                >
                    <Text style = {styles.buttonText}>Export to PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button}
                    onPress={() => this.props.navigation.navigate('Profile')}
                >
                    <Text style = {styles.buttonText}>Return to Profile</Text>
                </TouchableOpacity>


            </View>
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  textBold: {
    marginTop: '1%',
    marginBottom: '2%',
    fontWeight: 'bold',
    fontSize: 14
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  button: {
     width: '50%',
     backgroundColor: '#bde0eb',
     alignItems: 'center',
     justifyContent: "center",
     margin: 5,
     marginTop: 20,
     borderRadius: 10,
  },
});
