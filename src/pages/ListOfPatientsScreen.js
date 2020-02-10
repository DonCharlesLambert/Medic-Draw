import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SectionList,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Alert,

} from 'react-native';
import { render } from 'react-dom';
import { FlatList } from 'react-native-gesture-handler';


const ITEM_HEIGHT = 44; 
const HEADER_HEIGHT = 24; 
const screenHeight = Dimensions.get('window').height;

export default class ListOfPatientScreen extends React.Component {

  static navigationOptions = {
    title: 'Patient Lists',
    headerStyle: {
      backgroundColor: '#bde0eb', 
    },
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            patientList: [{ "title": "C", "data": [{ "Name": "Cindy", "Id": 3614 }] }, { "title": "D", "data": [{ "Name": "David", "Id": 5378 }] }, { "title": "E", "data": [{ "Name": "Evan", "Id": 5417 }] }, { "title": "I", "data": [{ "Name": "Irena", "Id": 5686 }, { "Name": "Idla", "Id": 4092 }, { "Name": "Idla", "Id": 4103 }] }, { "title": "M", "data": [{ "Name": "Mike", "Id": 1004 }] }, { "title": "N", "data": [{ "Name": "Neil", "Id": 4272 }, { "Name": "Nathan", "Id": 4288 }, { "Name": "Nicholas", "Id": 2648 }] }, { "title": "O", "data": [{ "Name": "Oak", "Id": 2652 }, { "Name": "Oakland", "Id": 1074 }] }, { "title": "P", "data": [{ "Name": "Peyton", "Id": 6066 }, { "Name": "Preston", "Id": 6073 }] }, { "title": "R", "data": [{ "Name": "Robert", "Id": 4480 }] }, { "title": "S", "data": [{ "Name": "Simon", "Id": 6334 }] }, { "title": "U", "data": [{ "Name": "Ulises", "Id": 1588 }] }, { "title": "W", "data": [{ "Name": "Weston", "Id": 4843 }, { "Name": "Warrn", "Id": 4883 }] }],
            // patientList:[{name: "bob"}, {name: "tim"}]
        }
    }
    
    _getData() {
        console.log("hi")
        // obtain data from backend server,并且格式化成 title,data的格式 
        $http.post('http://127.0.0.1:3000/patientList').then((data) => {
            if (data.Rstatus) {
                let list = data.Rdata.map(item => {
                    return {
                        title: item.ClassifyName,
                        data: item.List.map(w => {
                            return {
                                Name: w.WordName,
                                Id: w.WordId
                            }
                        }),
                    };
                });
                console.log(JSON.stringify(list))
                
                this.setState({
                    wordList: list,
                    // isLoading: false
                })
            }
            });

        // 请求后台接口获取单词数据的,并且格式化成 title,data的格式 
        // $http.post($urls.studentApi.Study_Word_GetWordListJson).then((data) => {
        //  if (data.Rstatus) {
        //      let list = data.Rdata.map(item => {
        //          return {
        //              title: item.ClassifyName,
        //              data: item.List.map(w => {
        //                  return {
        //                      Name: w.WordName,
        //                      Id: w.WordId
        //                  }
        //              }),
        //          };
        //      });
        //      console.log(JSON.stringify(list))
             
        //      this.setState({
        //          wordList: list,
        //          isLoading: false
        //      })
        //  }
        // });
    }
        
      
    _setItemLayout(list) {
        let [itemHeight, headerHeight] = [ITEM_HEIGHT, HEADER_HEIGHT];
        let layoutList = [];
        let layoutIndex = 0;
        let layoutOffset = 0;

        list.forEach(section => {
            layoutList.push({
                index: layoutIndex,
                length: headerHeight,
                offset: layoutOffset,
            });
            layoutIndex += 1;  
            layoutOffset += headerHeight; 
            section.data.forEach(() => { 
                layoutList.push({
                    index: layoutIndex,
                    length: itemHeight,
                    offset: layoutOffset,
                });
                layoutIndex += 1;
                layoutOffset += itemHeight; 
            });
            layoutList.push({
                index: layoutIndex,
                length: 0,
                offset: layoutOffset,
            });
            layoutIndex += 1; 
        });

        this.layoutList = layoutList;
    }

    _getItemLayout(data, index) {
        // let layout = this.layoutList.filter(n => n.index == index)[0];
        // return layout; 
    }

    _keyExtractor = (item, index) => index;

    _onSectionselect = (k) => {
        this.sectionList.scrollToLocation(
            {
                sectionIndex: k,
                itemIndex: 0,
                viewOffset: HEADER_HEIGHT,
            }
        );
    }
    _renderItem = ({ item }) => {
        return (
          // click to detail 
            <TouchableOpacity style={styles.sectionItem} onPress={() => {
                this.props.navigation.navigate('PatientDetail',
                // , {
                //     WordName: item.Name,
                //     IsExistWordBook: true,
                //     callback: () => {
                //         this._getData()
                //     }
                // }
                )
            }, this._getData
        }>
                <Text>{item.Name}</Text>
            </TouchableOpacity>
        )
    }

    _wordListView() {
            if (this.state.patientList && this.state.patientList.length > 0) {
                return (
                    <View style={styles.sectionContainer}>
                        <SectionList
                            ref={(ref) => { this.sectionList = ref }}
                            showsVerticalScrollIndicator={false}
                            // getItemLayout={this._getItemLayout.bind(this)}
                            keyExtractor={this._keyExtractor}
                            sections={this.state.patientList}
                            renderItem={this._renderItem}
                            renderSectionHeader={({ section }) => <View style={styles.sectionHeader}><Text style={styles.sectionHeaderTxt}>{section.title}</Text></View>}
                        />

                        <View style={styles.titleListWrapper}>
                            <View style={styles.sectionTitleList}>
                                {
                                    this.state.patientList.map((v, k) => {
                                        return (
                                            <Text style={styles.titleText} key={k} onPress={() => { this._onSectionselect(k) }}>{v.title}</Text>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                )
            } 
    }

    componentDidMount() {
        this._setItemLayout(this.state.patientList);

        // return fetch('https://facebook.github.io/react-native/movies.json')
        // .then((response) => response.json())
        // .then ((res) => {
        //     this.setState({
        //         isLoading: false,
        //         dataSource: res.movies,
        //     })
        // })

        // .catch((error) => {
        //     console.log(error);
        // });
    }

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <View style={styles.container}>
        //             <ActivityIndicator />
        //         </View>
        //     )}
        // else {
        //     let movies = this.state.dataSource.map((val, key) => {
        //         return <View key={key}>
        //     <Text>{val.title}</Text>
        //         </View>
        //     });

        //     return (
        //         <View style={styles.container}>
        //             {movies}
        //         </View>
        //     )
        // }
        return (
            // null
                <View>
                    {
                        this._wordListView()
                    }
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 22,
  },

  sectionContainer: {
      marginBottom: 50
  },
  sectionHeader: {
      height: HEADER_HEIGHT,
      paddingLeft: 10,
      justifyContent: 'center',
      backgroundColor: 'rgba(247,247,247,1.0)',
  },
  sectionHeaderTxt: {
      fontSize: 14,
      fontWeight: 'bold',
  },
  sectionItem: {
      height: ITEM_HEIGHT,
      paddingLeft: 10,
      justifyContent: 'center',
      borderBottomColor: '#eee',
      backgroundColor: '#fff',
  },
  titleListWrapper: {
      position: 'absolute',
      height: screenHeight,
      top: 0,
      right: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

  },
  sectionTitleList: {
      paddingVertical: 5
  },
  titleText: {
      textAlign: 'center',
      paddingVertical: 1,
      width: 20,
      fontSize: 12
  },
  inactivetext: {
      fontWeight: '700',
      color: '#CCCCCC'
  },
  wordPan: {
      paddingVertical: 20,
      paddingHorizontal: 15,
      borderBottomColor: '#eee',
  },
  wordText: {
      fontSize: 30,
  },
  wordSoundPan: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },
  iconSize: {
      marginRight: 10,
      fontSize: 20,
  },
  soundText: {
      marginRight: 30,
  },
  translationText: {
      marginTop: 15,
  },
  examplePan: {
      paddingHorizontal: 15,
      paddingVertical: 20,
  },
  eTitle: {
      fontSize: 20,
      marginBottom: 10,
  },
  media: {
      marginTop: 0,
      paddingTop: 10,
      paddingBottom: 10,
      display: "flex",
      flexDirection: "row",
  },
  sentenceText: {
      marginBottom: 10
  },
  translationSentence: {
      lineHeight: 20,
  },
  addWrapper: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 50,
      // backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
  },
  addContainer: {
  },
  mgtl: {
      paddingLeft: 10
  }
});