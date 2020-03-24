import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
var {windowWidth} = Dimensions.get('window');

export default class WholeBodyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UICCVersion: 'UICC Version 8',
      UICCOptions: ['UICC Version 8', 'UICC Version 7', 'UICC Version 6','UICC Version 5','UICC Version 4',],
      buttonDetail1: "",
      buttonDetail2: "",
      specification: "",
      inMemorySpecification: "",
    }
  }
    static navigationOptions = {
        title: 'UICC',
        headerStyle: {
          backgroundColor: '#bde0eb',
        },
        };


    searchPatient = (value) => {
      const filteredData = this.state.inMemorySpecification.filter (patient => {
              let dataLowerCase = (
                  patient.ConditionTwo
              ).toLowerCase();
              let searchTermLowerCase = value.toLowerCase();
              return dataLowerCase.indexOf(searchTermLowerCase) > -1;
          });
          this.setState({specification: filteredData})
      }
   
    render() {
      const { navigation } = this.props;  
      const specification = navigation.getParam('specification', 'NO-Infor'); 
      const buttonDetail2 = navigation.getParam('buttonDetail2', 'NO-Infor') ;
      if (this.state.specification === '') {
        this.setState({
          specification: specification,
          inMemorySpecification: specification,
        })
      }
      return (
        <ScrollView>
       <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <ModalDropdown
              style = {styles.button}
              options={this.state.UICCOptions}
              defaultValue = {'Change Version: UICC Version 8'}
              color = {'#bde0eb'}
              onSelect = {(version) => this.setState({UICCVersion: (String(this.state.UICCOptions[version]))})}
          />

          <View style={{flexDirection:'column'}}>
              <Text style={styles.subTitle}>{buttonDetail2} ({this.state.UICCVersion})</Text>
{/* 
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
                        autoCorrect={false}
                        style={{
                            height: 50, 
                            fontSize: 30,
                            padding: 10,
                            color: '#2f363c',

                        }}
                        onChangeText={(value) => this.searchPatient(value)}
                    />
                </View> */}
                {specification.map((item, index) => {
                  return (
                    <View style = {styles.tableContent} key = {index}>
                      <Text style = {{fontWeight: 'bold', fontSize: 14, color: '#2e0600'}}>Index: <Text>{index}</Text></Text> 
                      <Text style = {{fontWeight: 'bold', color: '#004478'}}>Condition One: <Text style={{color: '#595959'}}>{item.ConditionOne}</Text></Text> 
                      <Text style = {{fontWeight: 'bold', color: '#004478'}}>Condition Two: <Text style={{color: '#595959'}}>{item.ConditionTwo}</Text></Text>
                      <Text style = {{fontWeight: 'bold', color: '#004478'}}>Staging: <Text style={{color: '#595959'}}>{item.Staging}</Text></Text>                 
                    </View>
                  )
                })}
          </View>
           
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
              style = {styles.button2}
              onPress={() => this.props.navigation.navigate('Profile')}>
                  <Text>Back to Profile</Text>
              </TouchableOpacity>
          </View>
       </View>
       </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00e0db',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },

    dropDown: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#bde0eb',
        marginTop: 5,
        marginBottom: 5,
    },
    
    subTitle: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    text: {
        alignItems: 'flex-start',
        justifyContent: "center",
        margin: 5,
        marginLeft: 10,
        marginBottom: 5,
    },

    button: {
        width: '50%',
        backgroundColor: '#bde0eb',
        alignItems: 'center',
        justifyContent: "center",
        margin: 5,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
      },
      button2: {
        width: '50%',
        backgroundColor: '#bde0eb',
        alignItems: 'center',
        justifyContent: "center",
        margin: 5,
        marginTop: 20,
        marginBottom: 50,
        borderRadius: 10,
      },
      title: {
        width: '100%',
        height: '20%',
        backgroundColor: '#bde0eb',
        alignItems: 'center',
        justifyContent: "center",
      },
      tableContent: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: 20,
      },
      Img: {
        width: 35,
        height: 35,
        margin: 10
    },
});
