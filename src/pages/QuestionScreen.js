import * as React from 'react';
import {StyleSheet, Alert, View, Button, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBtn from '../CustomedComponent/CheckBtn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class drawingScreen extends React.Component {

  static navigationOptions = {
    title: 'Questions',
    };

    constructor(props){
      super(props);
      this.state= {
          tumourSize: 0,
          VocalChordMobile: '',
          Comments: '',
          HospitalNo: '',
      }
    }

    submit = () => {
      fetch('http://127.0.0.1:3000/questions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tumourSize: this.state.tumourSize,
          VocalChordMobile: this.state.VocalChordMobile,
          Comments: this.state.Comments,
          HospitalNo: this.state.HospitalNo,
        })
      })
      .then((response) => response.json())
      .then ((res) => {
      //   alert(res.message),
        // if (res.success === true) {
          // AsyncStorage.setItem('user',res.user);
          this.props.navigation.navigate('Result');
        // }
      })
    }

    componentDidMount() {
      const { navigation } = this.props;  
      const HospitalNo = navigation.getParam('HospitalNo', 'NO-User');  
      console.log("question page: ", HospitalNo);
      this.setState({
        HospitalNo: HospitalNo
      })
    }

    render() {
        
        return (
          <KeyboardAwareScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.container}>
              <View style={styles.theBox}>
                  <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 18}}>Size of the tumour (cm): </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Size of the tumour (cm)"
                    autoCorrect={false}
                    clearButtonMode="always"
                    onChangeText={(tumourSize)=>this.setState({tumourSize})}
                  />
                  {/* <CheckBtn
                      label='1 - 2cm'
                      onCheckChange={(size)=>this.setState({size})}
                  />
                  <CheckBtn
                      label='3 - 4cm'
                      onCheckChange={() => console.log('Tumour size is 3-4cm')}
                  /> */}
              </View>

              <View style={styles.theBox}>
                  <Text style={{fontWeight: 'bold', marginBottom: 10, marginTop: 10, fontSize: 18}}>Is vocal chord mobile?</Text>
                  <CheckBtn
                      label='Yes'
                      onCheckChange={(VocalChordMobile) => VocalChordMobile === 1}
                  />
                  <CheckBtn
                      label='No'
                      onCheckChange={(VocalChordMobile) => VocalChordMobile === 0}
                  />
              </View>

              <TextInput
                 style={styles.multiLine}
                 placeholder="Comments"
                 clearButtonMode="always"
                 multiline={true}
                 onChangeText={(Comments)=>this.setState({Comments})}
                 multiline={true}/>
              <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('Drawing')}
              >
                <Text style = {styles.buttonText}>Create Another Drawing</Text>
              </TouchableOpacity>              

              <TouchableOpacity
                style = {styles.button}
                onPress={this.submit.bind(this)}
              >
                <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              </KeyboardAwareScrollView>
          );
    }
}

const styles = StyleSheet.create({
    input: {
      height: 80,
      width: '70%',
      borderColor: 'gray',
    },
    multiLine: {
        height: 100,
        width: '70%',
        backgroundColor: '#add8e6',
        marginTop: 50,
        borderRadius: 20,
        padding: 15,
        left: "13%"
    },
    theBox: {
        backgroundColor: '#add8e6',
        alignItems: 'center',
        borderRadius: 20,
        width: '70%',
        height: '20%',
        marginTop: 50,
        marginBottom: 30,
        left: "13%"
    },
    button: {
        width: '50%',
        backgroundColor: '#cee8f0',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 10,
        left: "25%"
    }
  });