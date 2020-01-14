import * as React from 'react';
import { Image, TouchableHighlight, Text, Slider, Button, View } from 'react-native';
import Point from './Misc/Point';

export default class drawingScreen extends React.Component {
    constructor() {
        super();
        this.state = { points: [], colour: '#000', size: 5}
    }

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
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection:'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-around', height: '6%'}}>
                    <TouchableHighlight onPress={() => this.setState({ colour: 'black' })} style={{ borderRadius: 15, width: 40, height: 40, backgroundColor: 'black'}}><Text></Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setState({ colour: 'blue' })} style={{ borderRadius: 15, width: 40, height: 40, backgroundColor: 'blue', marginLeft: 20}}><Text></Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setState({ colour: 'red' })} style={{ borderRadius: 15, width: 40, height: 40, backgroundColor: 'red', marginLeft: 20}}><Text></Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setState({ colour: 'green' })} style={{ borderRadius: 15, width: 40, height: 40, backgroundColor: 'green', marginLeft: 20}}><Text></Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.clear()} style={{ borderRadius: 15, width: 40, height: 40, marginLeft: 20}}><Image source={require('../../img/clear.png')}></Image></TouchableHighlight>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'space-around', marginBottom: 10, height: '6%'}}>
                    <Text style={{fontSize: 18}}>Size:
                        <Slider
                        style={{width: 200, paddingTop: 65}}
                        minimumValue={5}
                        maximumValue={20}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={val => this.setState({ size: val })}/>
                    </Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'space-around',
                    height: '78%', width: '80%', borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da'}}
                      onStartShouldSetResponder={(ev) => true}
                      onResponderGrant={this.onTouchEvent.bind(this, "Touch")}
                      onResponderMove={this.onTouchEvent.bind(this, "Move")}>
                    {this.state.points.map(ele => ele.render())}
                </View>

                <View style = {{height: '6%'}}>
                    <Button title="Finish" onPress={() => this.props.navigation.navigate('Question')}/>
                </View>

            </View>
        );
    }
}