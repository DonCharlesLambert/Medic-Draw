import React, {Component} from "react";
import {FlatList, StyleSheet, Text, View, Button, Alert} from "react-native";

export default class ListOfPatientScreen2 extends Component {

    state = {
        data: [],
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        // const response = await fetch("http://127.0.0.1:3000/patientList");  // https://randomuser.me/api?results=100
        // const json = await response.json();
        // this.setState({data: json.results});
        // console.log("hi",response.message);

        await fetch('http://127.0.0.1:3000/patientList', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then ((res) => {
        // const json = res.json();
        const newData = JSON.parse(res.message);
        this.setState({data: newData});
        console.log("data == " , this.state.data);
      })
    };

    render() {
        let patients = this.state.data.map((val, key) => {
            return <View key = {key} style = {styles.item}>
                <Text>{val.Name} {val.HospitalNo}</Text>
            </View>
        })

    return (
        <View style={styles.container}>
            {patients}
            {/* <Text>hi</Text>
            <FlatList 
            data={this.state.data}
            keyExtractor={(x,i)=>i}
            renderItem={({ item }) =>
            <Text>
                {item.Name}
            </Text>}
            /> */}
        </View>
        );
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