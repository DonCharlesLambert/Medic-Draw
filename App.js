import HomeScreen from './src/pages/HomeScreen';
import MenuScreen from './src/pages/MenuScreen';
import CreateNewPatientScreen from './src/pages/CreateNewPatientScreen';
import WholeBodyScreen from './src/pages/WholeBodyScreen';
import CreateAccountScreen from './src/pages/CreateAccountScreen';
import HeadScreen from './src/pages/HeadScreen';
import LarynxPicScreen from './src/pages/LarynxPicScreen';
import DrawingScreen from './src/pages/DrawingScreen';
import QuestionScreen from './src/pages/QuestionScreen';
import SelectVersionScreen from './src/pages/SelectVersionScreen';
import ResultScreen from './src/pages/ResultScreen';


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
    Head: HeadScreen,
    LarynxPic: LarynxPicScreen,
    Drawing: DrawingScreen,
    Question: QuestionScreen,
    SelectVersion: SelectVersionScreen,
    Result: ResultScreen,
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