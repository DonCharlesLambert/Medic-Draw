import * as React from 'react';
import {StyleSheet, View, Button, Text, TextInput } from 'react-native';
import CheckBtn from '../CustomedComponent/CheckBtn';


export default class drawingScreen extends React.Component {

  static navigationOptions = {
    title: 'Questions',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', height: 300}}>
              <Text>Size of the tumour</Text>
              <CheckBtn checked={false} label='1-2'></CheckBtn>
              <CheckBtn checked={false} label='3-4'></CheckBtn>
              <Text>Is the vocal cord mobile?</Text>
              <CheckBtn checked={false} label='YES'></CheckBtn>
              <CheckBtn checked={false} label='NO'></CheckBtn>
              <Text>Comment</Text>
              <TextInput
                style={styles.input}
                placeholder="Comment"
                multiline={true}
            />
              <Button
                title="Submit"
                onPress={() => this.props.navigation.navigate('Result')}
              />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    input: {
      height: 80,
      width: '60%',
      borderColor: 'gray',
      marginBottom: '2.5%',
      borderWidth: 1
    },
  });