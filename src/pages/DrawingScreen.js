import * as React from 'react';
import { Image, TouchableOpacity, Text, Slider, Button, View } from 'react-native';
import Point from './Misc/Point';

export default class drawingScreen extends React.Component {
    constructor() {
        super();
        this.state = { points: [], colour: '#000', size: 5}
    }

    static navigationOptions = {
        title: 'Draw',
        headerStyle: {
            backgroundColor: '#bde0eb',
        },
    };

    onTouchEvent(name, ev) {
        let jim = new Point(ev.nativeEvent.locationX, ev.nativeEvent.locationY,
            this.state.size, this.state.colour, this.state.points.length);
        this.state.points.push(jim);
        this.forceUpdate();
    }

    _onPressButton() {
        alert('You tapped the button!')
    }

    clear(){
        this.state.points = [];
        this.forceUpdate();
    }

    render() {
        const { navigation } = this.props;  
        const HospitalNo = navigation.getParam('HospitalNo', 'NO-User');  
        console.log("drawing page: ",HospitalNo);
        return (
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
                <View style={{flexDirection:'row', marginTop: 10, height: '6%'}}>
                    <TouchableOpacity
                        onPress={() => this.setState({ colour: 'black' })}
                        style={{ borderColor: '#bde0eb', borderWidth: 5, borderRadius: 15, width: 40, height: 40, backgroundColor: 'black'}}><Text/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ colour: 'blue' })}
                        style={{ borderColor: '#bde0eb', borderWidth: 5, borderRadius: 15, width: 40, height: 40, backgroundColor: 'blue', marginLeft: 20}}><Text/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ colour: 'red' })}
                        style={{ borderColor: '#bde0eb', borderWidth: 5, borderRadius: 15, width: 40, height: 40, backgroundColor: 'red', marginLeft: 20}}><Text/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ colour: 'green' })}
                        style={{borderColor: '#bde0eb', borderWidth: 5, borderRadius: 15, width: 40, height: 40, backgroundColor: 'green', marginLeft: 20}}><Text/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.clear()}
                        style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#bde0eb', borderWidth: 5, borderRadius: 15, width: 40, height: 40, marginLeft: 20}}>
                        <Text style={{fontSize: 8}}>CLEAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'space-around', marginBottom: 25, height: '6%'}}>
                    <Text style={{fontSize: 18}}>Size:
                        <Slider
                        style={{width: 200, paddingTop: 65}}
                        minimumValue={5}
                        maximumValue={20}
                        minimumTrackTintColor="#bde0eb"
                        maximumTrackTintColor="#000000"
                        onValueChange={val => this.setState({ size: val })}/>
                    </Text>
                </View>

                <View
                    style={{ backgroundColor: '#bde0eb',
                    height: '72%', width: '80%', borderRadius: 20, borderWidth: 0.5, borderColor: '#d6d7da'}}
                      onStartShouldSetResponder={(ev) => true}
                      onResponderGrant={this.onTouchEvent.bind(this, "Touch")}
                      onResponderMove={this.onTouchEvent.bind(this, "Move")}>
                    <Image style={{flex: 1, height: undefined, width: undefined}} source = {require('../../img/larynx.png')}/>
                    {this.state.points.map(ele => ele.render())}
                </View>

                <View style = {{height: '6%'}}>
                    <Button title="Finish" onPress={() => this.props.navigation.navigate('Question', {
                        HospitalNo: HospitalNo})}/>
                </View>
            </View>
        );
    }
}