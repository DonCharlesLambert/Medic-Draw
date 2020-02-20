import React, {Component} from "react";
import {FlatList, StyleSheet, Text, View, ActivityIndicator, Alert} from "react-native";

export default class ListOfPatientScreen2 extends Component {

    state = {
        isLoading: true,
        data: [{"id":1,"HospitalNo":123456,"Name":"Lily","DOB":"123","Symptoms":"Fever"},{"id":2,"HospitalNo":234567,"Name":"Irene","DOB":"666","Symptoms":"The tonsils are swollen."}],
    }

    componentDidMount() {
        this.fetchData();
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )}
        else {
        let patients = this.state.data.map((val, key) => {
            return <View key = {key} style = {styles.item}>
                <Text>{val.Name} {val.HospitalNo}</Text>
            </View>
        })

    return (
        <View style={styles.container}>
            {patients}
        </View>
        );
    }
    }    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    item: {
        flex:1,
    }
})