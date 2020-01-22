import * as React from 'react';
import { StyleSheet, Alert, Text, View, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default class AnotherScreen extends React.Component {

  static navigationOptions = {
    title: 'Create New Patient',
    headerStyle: {
      backgroundColor: '#bde0eb',
    },
  };

  constructor(props){
    super(props);
    this.state= {
        image: '',
        name:'',
        DOB:'',
        HospitalNo:'',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('users');
    if (value !== null) {
      this.props.navigate('Menu');
    }
  }

    getImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.forceUpdate();
        }
    };
  
    submit = () => {
      // comment for test convenience
      // if (this.state.name === '') {
      //   Alert.alert('Patient name cannot be empty!');
      //   return;
      // }
  
      // if (this.state.DOB === '') {
      //   Alert.alert('DOB cannot be empty!');
      //   return;
      // }

      // if (this.state.HospitalNo === '') {
      //   Alert.alert('Hospital number cannot be empty!');
      //   return;
      // }

      this.props.navigation.navigate('WholeBody');
    }

    backendTest = () => {
      fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          DOB: this.state.DOB,
          HospitalNo: this.state.HospitalNo,
        })
      })
      .then((response) => response.json())
      .then ((res) => {
        if (res.success === true) {
          AsyncStorage.setItem('user',res.user);
          this.props.negivation.navigate('wholeBody');
        }
      })

    }

    render() {
      return (
          <KeyboardAwareScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={() => this.getImage()}>
                    <Image style={[styles.image, {marginTop: 40}]} source = {{uri: this.state.image}} />
                </TouchableOpacity>

                <TextInput
                style={styles.input}
                placeholder="Name"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(name)=>this.setState({name})}
                />

              <TextInput
                style={styles.input}
                placeholder="DOB"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(DOB)=>this.setState({DOB})}
              />

              <TextInput
              style={styles.input}
              // keyboardType="numeric"
              placeholder="Hospital Number"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={(HospitalNo)=>this.setState({HospitalNo})}

              />

              <TextInput
              style={styles.multinput}
              multiline={true}
              placeholder="Symptoms"
              clearButtonMode="always"
              />

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
    container: {
      flex: 1,
      backgroundColor: '#f2f3f4',
      alignItems: 'center',
    },
    image: {
      height: 150,
      width: 150,
      resizeMode: 'contain',
      marginBottom: '2.5%',
      borderColor: '#bde0eb',
      borderWidth: 10,
      borderRadius: 10,
    },
    input: {
      height: 40,
      width: '70%',
      backgroundColor: '#add8e6',
      marginBottom: '2.5%',
      borderRadius: 10,
      padding: 15
    },
    multinput: {
      height: 100,
      width: '70%',
      backgroundColor: '#add8e6',
      marginBottom: '2.5%',
      borderRadius: 10,
      padding: 15
    },
    button: {
      width: '30%',
      backgroundColor: '#cee8f0',
      alignItems: 'center',
      margin: 5,
      marginTop: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: '#034fa1',
      fontSize: 17,
    }
  })