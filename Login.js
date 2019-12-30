import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      height: 40,
      width: '60%',
      borderColor: 'gray',
      borderRadius: 25,
      backgroundColor: '#c7bdc6',
      marginBottom: '2.5%',
      borderWidth: 1
    },
  
    login_image: {
      height: '20%',
      marginBottom: '2.5%',
    },
  
    background: {
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
    }
});