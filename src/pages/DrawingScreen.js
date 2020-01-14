import * as React from 'react';
import { View, Button } from 'react-native';

export default class drawingScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
              {/* don please continue working on this page */}
              <Button
                title="Next Page"
                onPress={() => this.props.navigation.navigate('Question')}
              />
            </View>
          );
    }
}