import HomeScreen from './src/pages/HomeScreen';
import MenuScreen from './src/pages/MenuScreen';
import CreateNewPatientScreen from './src/pages/CreateNewPatientScreen';
import WholeBodyScreen from './src/pages/WholeBodyScreen';
import CreateAccountScreen from './src/pages/CreateAccountScreen';

import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Menu: MenuScreen,
    CreateNewPatient: CreateNewPatientScreen,
    WholeBody: WholeBodyScreen,
    CreateAccount: CreateAccountScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}