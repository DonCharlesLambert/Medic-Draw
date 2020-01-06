import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, ToastAndroid, Button, TextInput, Alert, TouchableOpacity, ActionSheetIOS } from 'react-native';

export default class AnotherScreen extends React.Component {

  static navigationOptions = {
    title: 'Create New Patient',
    };

  constructor(props){
    super(props);
    this.state= {
        name:'',
        DOB:''
    }
  }

    render() {
      return (
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
              <Text>Name</Text>

              <TextInput
              style={styles.input}
              placeholder="Name"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={(name)=>this.setState({name})}
              ></TextInput>

            <Text>DOB</Text>
            <TextInput
              style={styles.input}
              placeholder="DOB"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={(DOB)=>this.setState({DOB})}
            ></TextInput>

              <Text>Hosptical Number</Text>
              <TextInput
              style={styles.input}
              // keyboardType="numeric"
              placeholder="Hosptical Number"
              autoCorrect={false}
              clearButtonMode="always"
              ></TextInput>

              <Text>Symptom</Text>
              <TextInput
              style={ 
              {height: 100, 
              width: '60%',
              borderColor: 'gray',
              marginBottom: '2.5%',
              borderWidth: 1}}
              multiline={true}
              placeholder="Symptom"
              autoCorrect={false}
              clearButtonMode="always"
              ></TextInput>

              <Button
                title="Submit"
                // onPress={()=>{this.NewPatientMethod(this.state)}}>
                onPress={() => this.props.navigation.navigate('WholeBody')}
              ></Button>
          </View>
        </ScrollView>

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
    input: {
      height: 40,
      width: '60%',
      borderColor: 'gray',
      marginBottom: '2.5%',
      borderWidth: 1
    },
  })