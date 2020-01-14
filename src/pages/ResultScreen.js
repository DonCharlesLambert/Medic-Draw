import * as React from 'react';
import {StyleSheet, View, Button, Text, Image, Alert } from 'react-native';


export default class ResultScreen extends React.Component {

  static navigationOptions = {
    title: 'Result',
    };

    Exported = () => {
        alert('Data has imported to your album! Thank You!');
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View>
              <Text style= {styles.textInput}>Patient Name: Name</Text>
              <Text style= {styles.textInput}>Patient Age: 63</Text>
              <Text style= {styles.textInput}>Tumour Area: Upper side of larynx</Text>
              <Text style= {styles.textInput}>Patient Age: 63</Text>
              <Text style= {styles.textInputBold}>According to UICC version 8, the tumour level is T3:</Text>
              <Text style= {styles.textInputBold}>Tumour more than 4cm in or extension to lingual surface of epiglottis. </Text>

              <Image style = {styles.image} source={require('../../img/larynx.png')} resizeMode="contain"></Image>
                <Button
                  title="Change UICC version"
                  onPress={() => Alert.alert('UICC VERSION','Current Version 8',[
                    {text:"1", onPress:this.opntion1Selected},
                    {text:"2", onPress:this.opntion2Selected},
                    {text:"3", onPress:this.opntion3Selected},
                    {text:"4", onPress:this.opntion4Selected},
                    {text:"5", onPress:this.opntion5Selected},
                    {text:"6", onPress:this.opntion6Selected},
                    {text:"7", onPress:this.opntion7Selected},
                    {text:"8", onPress:this.opntion8Selected},



                  ]
                )}
                />
                <Button
                  title="Export As PDF"
                  onPress={this.Exported}
                />
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
  textInput: {
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  textInputBold: {
    marginLeft: '5%',
    marginTop: '1%',
    marginBottom: '2%',
    fontWeight: 'bold',
    fontSize: 15.5
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    marginTop: '5%',
    marginBottom: '10%',
    // marginRight:'500%',
  },
});
