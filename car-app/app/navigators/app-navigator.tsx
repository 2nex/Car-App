/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
import React from 'react';
import {Animated, Platform, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigatorParamList} from './navigation-route';
import {navigationRef} from './navigation-utilities';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import OnBoardingScreen from '../screens/onboarding/onboarding.screen';
import {colors} from '../theme/colors';
import {scale} from '../theme/scale';
import {createStyle} from './navigation.styles';
import OnBoardingScreenTwo from '../screens/onboarding/onboardingTwo.screen';
import SignInScreen from '../screens/singin/signin.screen';
import SignUpScreen from '../screens/signup/signup.screen';
import ResetScreen from '../screens/reset/reset.screen';
import VerifyScreen from '../screens/verify/verify.screen';
import OtpScreen from '../screens/otp/otp.screen';
import HomeScreen from '../screens/home/home.screen';
import ProfileScreen from '../screens/account/profile/profile.screen';
import NotificationScreen from '../screens/notification/notification.screen';
import MessageScreen from '../screens/message/message.screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from '../screens/search/search.screen';
import CarScreen from '../screens/car/car.screen';
import ReviewScreen from '../screens/review/review.screen';
import BookingScreen from '../screens/booking/details/booking.screen';
import BookingPaymentScreen from '../screens/booking/payment/payment.screen';
import BookingConfirmationScreen from '../screens/booking/confirmation/confirmation.screen';
import BookingStatusScreen from '../screens/booking/status/status.screen';
import EditScreen from '../screens/account/edit/edit.screen';
import ChatScreen from '../screens/message/chat/chat.screen';

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
const Stack = createStackNavigator<NavigatorParamList>();
const Tab = createBottomTabNavigator<NavigatorParamList>();

const TabStack = () => {
  const styles = createStyle();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,
        tabBarIcon: ({focused, size}) => {
          let iconName: string = 'camera';
          if (route.name == 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          
          } if (route.name == 'SearchScreen') {
            iconName = focused ? 'search' : 'search';
          
          }  if (route.name == 'MessageScreen') {
            iconName = focused ? 'message' : 'message';
          
          } else if (route.name == "NotificationScreen") {
            iconName = focused ?  'notifications' : 'notifications'
          } else if (route.name == "ProfileScreen") {
            iconName = focused ? "account-circle" : "account-circle"
          }
          return (
            <View style={styles.tabContainer}>
              <MaterialIcons
                name={iconName}
                size={scale(focused ? 25 : 23)}
                color={focused ? colors.white : colors.icon}
              />
              
            </View>
          );
        },
        headerShown: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: scale(12),
        },
        lazy: false,
        tabBarStyle: {
          height:
            Platform.OS == 'ios'
              ? scale(50 + useSafeAreaInsets().bottom)
              : scale(60),
          backgroundColor: colors.bgTab,
          position: 'absolute',
          bottom: scale(28),
          borderRadius: scale(30),
          marginHorizontal: scale(12), 
        },
      })}
      initialRouteName={'HomeScreen'}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
     
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
     
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
     
     
     
     
      
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OnBoardingScreenTwo"
        component={OnBoardingScreenTwo}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ResetScreen"
        component={ResetScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="VerifyScreen"
        component={VerifyScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="BookingDetailsScreen"
        component={BookingScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="BookingPaymentScreen"
        component={BookingPaymentScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="BookingConfirmationScreen"
        component={BookingConfirmationScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="BookingStatusScreen"
        component={BookingStatusScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

const CombinedStack = () => {
  const isAuthenticated = true;
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: true}}>
      <Stack.Screen
        name="auth"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        component={isAuthenticated ? TabStack : AuthStack}
      />
      <Stack.Screen
        name="tabStack"
        component={TabStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="authStack"
        component={AuthStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="rootStack"
        component={RootStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      {CombinedStack()}
    </NavigationContainer>
  );
}