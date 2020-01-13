import * as React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';




import {Platform} from 'react-native';
console.disableYellowBox = true; // 关闭全部黄色警告
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
import SelectVersionScreen from './src/pages/SelectVersionScreen';
import ResultScreen from './src/pages/ResultScreen';




export const BottomTab = createAppContainer(
  createBottomTabNavigator(
    {
      /*Page1路由*/
      ProfileScreen: {
        /*Page1页面*/
        screen: ProfileScreen,
        /*屏幕导航选项,可以定制导航器显示屏幕的方式（头部标题，选项卡标签等）*/
        navigationOptions: {
          /*导航标签名*/
          tabBarLabel: '页1',
          /*导航呈现的图标*/
          tabBarIcon: ({tintColor, focused}) => (
            /*第三方图标库（图标名称，图标大小，图标样式*/
            <MaterialIcons name={'home'} size={26} style={{color: tintColor}} />
          ),
        },
      },
      CreateNewPatient: {
        screen: CreateNewPatientScreen,
        navigationOptions: {
          tabBarLabel: '页2',
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialIcons
              name={'location-on'}
              size={26}
              style={{color: tintColor}}
            />
          ),
        },
      },
      SelectVersionScreen: {
        screen: SelectVersionScreen,
        navigationOptions: {
          tabBarLabel: '页3',
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialIcons
              name={'assignment'}
              size={26}
              style={{color: tintColor}}
            />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#06C1AE' : '#06C1AE',
      },
    },
  ),
);


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
    SelectVersion: SelectVersionScreen,
    Result: ResultScreen,
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
