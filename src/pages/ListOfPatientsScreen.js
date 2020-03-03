import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, ActivityIndicator, Dimensions, Image, TouchableOpacity} from 'react-native';
var {windowWidth} = Dimensions.get('window');

export default class ListOfPatientScreen extends React.Component {

    static navigationOptions = {
        title: 'Patients List',
        headerStyle: {
          backgroundColor: '#bde0eb', 
        },
        };

    constructor() {
        super()
        this.state={
            isLoading: false,
            data: [],
            inMemoryData: []
        }
    }

    fetchData = async () => {
        await fetch('http://127.0.0.1:3000/patientList', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then ((res) => {
        const newData = JSON.parse(res.message);
        this.setState({
            data: newData,
            inMemoryData: newData,
            isLoading: false,
        });
        // console.log("data == " , this.state.data);
      })
      .catch(function(error) {
        console.log('Problem with fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
    };

    componentDidMount () {
        this.setState({isLoading: true})
        this.fetchData();
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this._onPress(item)}>
            <View style={{minHeight: 70, padding: 5, marginLeft: 10}}>
                <Text style={{color: '#616161', fontWeight:'bold', fontSize: 26}}>{item.Name}</Text>
                <Text style={{color: '#808080', fontWeight: 'bold' }}>HospitalNo: {item.HospitalNo}</Text>
            </View>  
        </TouchableOpacity>
      
    )

    searchPatient = (value) => {
        const filteredPatients = this.state.inMemoryData.filter (patient => {
                let dataLowerCase = (
                    patient.Name
                ).toLowerCase();
                let searchTermLowerCase = value.toLowerCase();
                return dataLowerCase.indexOf(searchTermLowerCase) > -1;
            });
            this.setState({data: filteredPatients})
    }

    _onPress(item) {
        this.props.navigation.navigate('PatientDetail', {
            HospitalNo: item.HospitalNo,
            data: this.state.data
            }
        );
    }
    
    

    render ()  {
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style= {{backgroundColor: '#cee8f0'}}/>
                <View style={{flexDirection:'row', 
                        width: windowWidth, 
                        height:50,
                        borderRadius: 15,
                        marginTop: 10,
                        marginLeft: 5,
                        marginRight: 5,
                        backgroundColor:'#cee8f0'}}>
                    <Image style = {styles.Img} source={require('../../img/search.png')} />
                    <TextInput
                        placeholder= "Search: "
                        style={{
                            height: 50, 
                            fontSize: 30,
                            padding: 10,
                            color: '#2f363c',

                        }}
                        onChangeText={(value) => this.searchPatient(value)}
                    />
                </View>
        
                <View style = {{flex: 1}}>
                    {this.state.isloading? (
                        <View style={{
                            alignItems: 'center', 
                            justifyContent: 'center'
                            }}>
                            <ActivityIndicator size='large' color='#616161'/> 
                    </View>
                    ):null}

                    <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={() => (
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 50,
                            }}>
                            <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 30}}>no contacts found</Text>
                        </View>
                    )}
                    />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    Img: {
        width: 35,
        height: 35,
        margin: 10
    },
})