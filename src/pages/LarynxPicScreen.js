import * as React from 'react';
import { StyleSheet, Dimensions, View, Image, Button } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';


export default class LarynxPicScreen extends React.Component {
    static navigationOptions = {
        title: 'Larynx',
        headerStyle: {
          backgroundColor: '#bde0eb',
      },
        };
        
    render() {
      const { navigation } = this.props;  
      const HospitalNo = navigation.getParam('HospitalNo', 'NO-User');  
      console.log("larynx page: ",HospitalNo);
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
          <Image source={require('../../img/larynx.png')} style={styles.imgStyle}></Image>
          <Button
            title="Axial"
            onPress={() => this.props.navigation.navigate('Drawing',  {
              HospitalNo: HospitalNo})}
          />
          <Image source={require('../../img/larynx.png')} style={styles.imgStyle}></Image> 
          <Button
            title="Sagital"
            onPress={() => this.props.navigation.navigate('Drawing',  {
              HospitalNo: HospitalNo})}
          />
        </View>

      );
    }
  }

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
      },
      imgStyle: {
        width:Dimensions.get('window').width,
        height:300
    }
});