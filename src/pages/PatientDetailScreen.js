
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button, AsyncStorage, Alert } from 'react-native';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';

export default class PatientDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HospitalNo: '',
      data: [],
      filteredData: [],
      run: false,
      tableTitle: ['Name', 'Hospital Number', 'DOB', 'Tumour Size (cm)'],
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
    await fetch('http://51.140.46.232/patientDetails?HospitalNo='+ HospitalNo, {
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

  submit = () => {
    Alert.alert('Data has been exported to your ablum!');
    this.props.navigation.navigate('Profile');
  }

  render() {
      const { navigation } = this.props;  
      const HospitalNo = navigation.getParam('HospitalNo', 'NO-User');  
      const Name = navigation.getParam('Name', 'NO-User');  
      const comments = navigation.getParam('comments', 'NO-User');  
      const size = navigation.getParam('size', 'NO-User');  
      const vocalChordMobile = navigation.getParam('vocalChordMobile', 'NO-User');  
      const data = navigation.getParam('data', '[]');  
      const specificPatient = data.filter(item => item.HospitalNo === HospitalNo)

      var tableData = [
        [Name],
        [HospitalNo],
        [specificPatient[0].DOB],
        [size]
      ]

      console.log("Hospital NO: ",HospitalNo);
      console.log("comment NO: ",comments);
      console.log("size NO: ",size);
      console.log("vocal NO: ",vocalChordMobile);

      // const data = navigation.getParam('data', '[]');  
      // console.log("data:::",data)

      // console.log(this.state.HospitalNo)
      // console.log("hihihi", this.state.filteredData[0])
      // const specificPatient = data.filter(item => item.HospitalNo === HospitalNo)
      // console.log("filtered data", this.state.filteredData);
      // console.log("Specific patient: ", specificPatient);
      // if (this.state.filteredData === "") {
      //   this.fetchData();
      //   this.setState({
      //     run: false
      //   })
      // }
      
    return (
      <View style={styles.container}>
      {/* <Text>Name: {Name}</Text> */}
          {/* <Text style={styles.text}>HospitalNo: {HospitalNo}</Text> */}
          {/* <Text style={styles.text}>DOB: {specificPatient[0].DOB}</Text> */}
          {/* <Text>Tumour Size: {size}</Text> */}
          <Table borderStyle={{borderWidth: 2, borderColor: '#545454'}} >
          {/* <Row data={this.state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/> */}
          <TableWrapper style={styles.wrapper}>
            <Col data={this.state.tableTitle} style={styles.title} heightArr={[28,30]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
        <Text style = {{marginTop: '5%', fontWeight: 'bold'}}>Symptoms : <Text style={{color: '#595959'}}>
            {specificPatient[0].Symptoms}
          </Text>
        </Text>
        <Text style = {{marginTop: '1.5%', fontWeight: 'bold'}}>Whether vocal chord mobile or not? : <Text style={{color: '#595959'}}>{vocalChordMobile}
          </Text>
        </Text>
        <Text style = {{marginTop: '1.5%', fontWeight: 'bold'}}>Doctor comments: <Text style={{color: '#595959'}}>{comments}
        </Text>
        </Text>
        <Text style = {{marginTop: '1.5%', fontWeight: 'bold'}}>Tumour Image: <Text style={{color: '#595959'}}>
          </Text>
        </Text>
        <Image source={require('../../img/larynx.png')} style={styles.imgStyle}></Image>

         <View>
          <TouchableOpacity
            style = {styles.button}
            onPress={this.submit.bind(this)}
            >
                <Text style = {styles.buttonText}>Export to PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#a8a8a8' },
  row: {  height: 28  },
  text: { textAlign: 'center' }, 
  buttonText: {
    color: '#034fa1',
    fontSize: 17,
  },
  imgStyle: {
    width:Dimensions.get('window').width,
    height:300,
    marginTop: '5%'
},
button: {
  width: 200,
  height: 50,
  backgroundColor: '#cee8f0',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: 5,
  marginTop: 15,
  marginLeft: '25%',

  borderRadius: 15,
},
});
