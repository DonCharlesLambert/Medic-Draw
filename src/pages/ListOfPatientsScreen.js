import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, ActivityIndicator, Header} from 'react-native';

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
        await fetch('http://51.132.14.14/patientList', {
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
        console.log("data == " , this.state.data);
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
        <View style={{minHeight: 70, padding: 5}}>
            <Text style={{color: '#bada55', fontWeight:'bold', fontSize: 26}}>{item.Name}</Text>
            <Text style={{color: 'white', fontWeight: 'bold' }}>HospitalNo: {item.HospitalNo}</Text>
        </View>
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

    render ()  {
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style= {{backgroundColor: '#cee8f0'}}/>
                <TextInput
                    placeholder="Search: "
                    placeholderTextColor="2f363c"
                    style={{
                        height: 50, 
                        backgroundColor: '#cee8f0',
                        fontSize: 36,
                        padding: 10,
                        color: 'white',
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#7d90a0',
                    }}
                    onChangeText={(value) => this.searchPatient(value)}
                />
        
                <View style = {{flex: 1, backgroundColor: '#cee8f0'}}>
                    {this.state.isloading? (
                        <View style={{
                            alignItems: 'center', 
                            justifyContent: 'center'
                            }}>
                            <ActivityIndicator size='large' color='#bad555'/> 
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
                                marginTop: 50
                            }}>
                            <Text style={{color: '#bad555'}}>no contacts found</Text>
                        </View>
                    )}
                    />
            </View>
        </View>
        );
    }
}