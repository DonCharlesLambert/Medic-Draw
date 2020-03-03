
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput, AsyncStorage, Alert } from 'react-native';

export default class PatientDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HospitalNo: '',
      data: [],
      filteredData: [],
      run: false,
    }
  }

  static navigationOptions = {
    title: 'Patient Details',
    headerStyle: {
      backgroundColor: '#bde0eb', 
    },
  };

  fetchData = async () => {
   const { navigation } = this.props;  
      const HospitalNo = navigation.getParam('HospitalNo', 'NO-User'); 
      this.setState({
        HospitalNo: HospitalNo,
    });

    console.log("This: ", HospitalNo)
    await fetch('http://127.0.0.1:3000/patientDetails?HospitalNo='+ HospitalNo, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((response) => response.json())
        .then ((res) => {
            const result = JSON.parse(res.message);
            this.setState({
              filteredData: result
            });
            console.log("filtered data: ",this.state.filteredData[0].HospitalNo)

            console.log("filtered data: ",this.state.filteredData)
            console.log(this.state.filteredData[0].HospitalNo)
        })
        .catch(function(error) {
          console.log('Problem with fetch operation: ' + error.message);
            throw error;
          });
  };

  componentDitMount() {
    this.fetchData();
  }

  render() {
      const { navigation } = this.props;  
      const HospitalNo = navigation.getParam('HospitalNo', 'NO-User'); 
      const data = navigation.getParam('data', '[]');  
      if (this.state.HospitalNo !== HospitalNo) {
        this.setState({
          data: data,
          HospitalNo: HospitalNo,
          // run: true,
      });
      }
      // console.log(this.state.HospitalNo)
      // console.log("hihihi", this.state.filteredData[0])
      // const specificPatient = this.state.data.filter(item => item.HospitalNo === HospitalNo)
      // console.log("filtered data", this.state.filteredData);
      // console.log("Specific data: ", specificPatient);
      // if (this.state.filteredData === "") {
      //   this.fetchData();
      //   this.setState({
      //     run: false
      //   })
      // }
      
    return (
        <View>
          <Text style={styles.text}>HospitalNo: {HospitalNo}</Text>
    <Text>Name: </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f4',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
});
