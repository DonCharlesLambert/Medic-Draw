import * as React from 'react';
import { StyleSheet, Dimensions, View, Image, Button } from 'react-native';
import RadiusBtn from '../CustomedComponent/RadiusBtn';


export default class LarynxPicScreen extends React.Component {
    static navigationOptions = {
        title: 'Body',
        };
        
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
          <Image source={require('../../img/larynx.png')} style={styles.imgStyle}></Image>
          <Button
            title="Axial"
            onPress={() => this.props.navigation.navigate('CreateNewPatient')}
          />
          <Image source={require('../../img/larynx.png')} style={styles.imgStyle}></Image> 
          <Button
            title="Sagital"
            onPress={() => this.props.navigation.navigate('CreateNewPatient')}
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
        // 设置背景颜色
        // backgroundColor:'green',
        // 设置宽度
        width:Dimensions.get('window').width,
        // 设置高度
        height:300
    }
});