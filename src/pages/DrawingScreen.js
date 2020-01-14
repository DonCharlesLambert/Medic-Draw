import * as React from 'react';
import { Text, Slider, Button, View } from 'react-native';
import Point from './Misc/Point';

export default class drawingScreen extends React.Component {
    constructor() {
        super();
        this.state = { points: [], colour: '#000' }
    }

    onTouchEvent(name, ev) {
        let jim = new Point(ev.nativeEvent.locationX, ev.nativeEvent.locationY, this.state.colour, this.state.points.length);
        this.state.points.push(jim);
        this.forceUpdate();
    }

    render() {
        return (
            <View>
                <View style={{alignItems: 'center', justifyContent: 'space-around', height: '6%'}}>
                    <Text> Size </Text>
                    <Slider
                        style={{width: 200}}
                        minimumValue={5}
                        maximumValue={20}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'space-around', height: '84%'}}
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