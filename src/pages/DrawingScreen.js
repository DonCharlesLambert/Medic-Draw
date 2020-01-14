import * as React from 'react';
import { Button, View } from 'react-native';
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
              <View style={{alignItems: 'center', justifyContent: 'space-around', height: '4%'}}>

              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-around', height: '92%'}}
                    onStartShouldSetResponder={(ev) => true}
                    onResponderGrant={this.onTouchEvent.bind(this, "Touch")}
                    onResponderMove={this.onTouchEvent.bind(this, "Move")}>
                  {this.state.points.map(ele => ele.render())}
              </View>
              <View style = {{height: '4%'}}>
                    <Button title="Finish" onPress={() => this.props.navigation.navigate('Question')}/>
              </View>
            </View>
        );
    }
}