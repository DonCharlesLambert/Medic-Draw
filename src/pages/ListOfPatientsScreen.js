import { ListItem } from 'react-native-elements'
import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Menu',
        };
        
    render() {
      return (
        <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }
      </View>
      );
    }
  }
  
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  // more items
]

