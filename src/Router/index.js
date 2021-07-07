import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ForgotPassword from '../screens/ForgotPassword';
import GettingStarted from '../screens/GettingStarted';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Profile from '../screens/Profile';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import DrawerContent from '../components/DrawerContent';
import {TransitionPresets} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import TabBar from '../components/TabBar';
import EditProfile from '../screens/EditProfile';
import History from '../screens/History';
import ProductDetail from '../screens/ProductDetail';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabApp = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          title: 'Chat',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Tab.Navigator>
  );
};

const MainApp = () => {
  return (
    <Drawer.Navigator
      drawerStyle={styles.drawer}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={TabApp}
        name="TabApp"
        options={{
          headerShown: false,
          title: 'TabApp',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        component={SplashScreen}
        name="SplashScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={GettingStarted}
        name="GettingStarted"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={WelcomeScreen}
        name="WelcomeScreen"
        options={{
          headerShown: false,
          title: 'WelcomeScreen',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
          title: 'Register',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
          title: 'Register',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={ForgotPassword}
        name="ForgotPassword"
        options={{
          headerShown: false,
          title: 'ForgotPassword',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={MainApp}
        name="MainApp"
        options={{
          headerShown: false,
          title: 'MainApp',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={EditProfile}
        name="EditProfile"
        options={{
          headerShown: false,
          title: 'EditProfile',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={History}
        name="History"
        options={{
          headerShown: false,
          title: 'History',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={ProductDetail}
        name="ProductDetail"
        options={{
          headerShown: false,
          title: 'ProductDetail',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    borderTopRightRadius: 30,
    width: 324,
  },
});

export default Router;
