import * as React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';




import {Platform} from 'react-native';
console.disableYellowBox = true; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import MenuScreen from './src/pages/MenuScreen';
import CreateNewPatientScreen from './src/pages/CreateNewPatientScreen';
import WholeBodyScreen from './src/pages/WholeBodyScreen';
import CreateAccountScreen from './src/pages/CreateAccountScreen';
import HeadScreen from './src/pages/HeadScreen';
import LarynxPicScreen from './src/pages/LarynxPicScreen';
import DrawingScreen from './src/pages/DrawingScreen';
import QuestionScreen from './src/pages/QuestionScreen';
import ResultScreen from './src/pages/ResultScreen';
import ListOfPatientsScreen from './src/pages/ListOfPatientsScreen';
import UICCVersionViewScreen from './src/pages/UICCVersionViewScreen';
import PatientDetailScreen from './src/pages/PatientDetailScreen';

// export const BottomTab = createAppContainer(
//   createBottomTabNavigator(
//     {
//       ProfileScreen: {
//         screen: ProfileScreen,
//         navigationOptions: {
//           tabBarLabel: '页1',
//           tabBarIcon: ({tintColor, focused}) => (
//             <MaterialIcons name={'home'} size={26} style={{color: tintColor}} />
//           ),
//         },
//       },
//       CreateNewPatient: {
//         screen: CreateNewPatientScreen,
//         navigationOptions: {
//           tabBarLabel: '页2',
//           tabBarIcon: ({tintColor, focused}) => (
//             <MaterialIcons
//               name={'location-on'}
//               size={26}
//               style={{color: tintColor}}
//             />
//           ),
//         },
//       },
//       ResultScreen: {
//         screen: ResultScreen,
//         navigationOptions: {
//           tabBarLabel: '页3',
//           tabBarIcon: ({tintColor, focused}) => (
//             <MaterialIcons
//               name={'assignment'}
//               size={26}
//               style={{color: tintColor}}
//             />
//           ),
//         },
//       },
//     },
//     {
//       tabBarOptions: {
//         activeTintColor: Platform.OS === 'ios' ? '#06C1AE' : '#06C1AE',
//       },
//     },
//   ),
// );


const RootStack = createStackNavigator(
  {
    // BottomTab: {
    //   screen: BottomTab,
    // },
    Home: HomeScreen,
    Profile: ProfileScreen,
    Menu: MenuScreen,
    CreateNewPatient: CreateNewPatientScreen,
    WholeBody: WholeBodyScreen,
    CreateAccount: CreateAccountScreen,
    Head: HeadScreen,
    LarynxPic: LarynxPicScreen,
    Drawing: DrawingScreen,
    Question: QuestionScreen,
    Result: ResultScreen,
    ListOfPatients: ListOfPatientsScreen,
    UICCVersionView: UICCVersionViewScreen,
    PatientDetail: PatientDetailScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer( // createSwitchNavigator(
  // {
  //   BottomTab: BottomTab,
  // },
// ),
RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const AppRouter = createStackNavigator({
//   Home: {
//     screen: BottomTab,
//     navigationOptions: {
//       header: null, //可以通过将header设为null来禁用StackNavigator的Navigation
//     },
//   },
// });

// export const AppCreateNavigator = createAppContainer(
//   createSwitchNavigator(
//     {
//       AppRouter: AppRouter,
//     },
//     {
//       initialRouteName: 'AppRouter',
//     },
//   ),
// );
