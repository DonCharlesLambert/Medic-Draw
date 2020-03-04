
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
      const Name = navigation.getParam('Name', 'NO-User'); 
      this.setState({
        HospitalNo: HospitalNo,
        Name: Name,
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


  render() {
      const { navigation } = this.props;  
      const HospitalNo = navigation.getParam('HospitalNo', 'NO-User');  
      const Name = navigation.getParam('Name', 'NO-User');  
      const comments = navigation.getParam('comments', 'NO-User');  
      const size = navigation.getParam('size', 'NO-User');  
      const vocalChordMobile = navigation.getParam('vocalChordMobile', 'NO-User');  


      console.log("Hospital NO: ",HospitalNo);
      console.log("comment NO: ",comments);
      console.log("size NO: ",size);
      console.log("vocal NO: ",vocalChordMobile);

      const data = navigation.getParam('data', '[]');  
      // console.log("data:::",data)

      // console.log(this.state.HospitalNo)
      // console.log("hihihi", this.state.filteredData[0])
      const specificPatient = data.filter(item => item.HospitalNo === HospitalNo)
      // console.log("filtered data", this.state.filteredData);
      console.log("Specific patient: ", specificPatient);
      // if (this.state.filteredData === "") {
      //   this.fetchData();
      //   this.setState({
      //     run: false
      //   })
      // }
      
    return (
        <View>
          <Text>Name: {Name}</Text>
          <Text style={styles.text}>HospitalNo: {HospitalNo}</Text>
          <Text style={styles.text}>DOB: {specificPatient[0].DOB}</Text>
          <Text style={styles.text}>Symptoms: {specificPatient[0].Symptoms}</Text>
          <Text>Tumour Size: {size}</Text>
          <Text>Whether vocal chord mobile or not? : {vocalChordMobile}</Text>
          <Text>Doctor comments: {comments}</Text>



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
