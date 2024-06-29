import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Discover,
  Home,
  Language,
  Login,
  Notification,
  Notifications,
  Payment,
  PersonalInfo,
  Profile,
  Purchased,
  Verification,
  Wishlist,
} from '@screens';
import MyTabBar from './bottom/BottomTab';
import {
  DiscoverFillIcon,
  DiscoverOutlineIcon,
  HomeFillIcon,
  HomeOutlineIcon,
  ProfileFillIcon,
  ProfileOutlineIcon,
  PurchaseFillIcon,
  PurchaseOutlineIcon,
  WishlistFillIcon,
  WishlistOutlineIcon,
} from '@icons';
import {navigationRef} from './navigationRef';

const BottomTabNavigator = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const bottom_tabs = [
  {
    name: 'Home',
    component: Home,
    icon_fill: (color: string) => <HomeFillIcon color={color} />,
    icon_outline: (color: string) => <HomeOutlineIcon color={color} />,
  },
  {
    name: 'Discover',
    component: Discover,
    icon_fill: (color: string) => <DiscoverFillIcon color={color} />,
    icon_outline: (color: string) => <DiscoverOutlineIcon color={color} />,
  },
  {
    name: 'Wishlist',
    component: Wishlist,
    icon_fill: (color: string) => <WishlistFillIcon color={color} />,
    icon_outline: (color: string) => <WishlistOutlineIcon color={color} />,
  },
  {
    name: 'Purchased',
    component: Purchased,
    icon_fill: (color: string) => <PurchaseFillIcon color={color} />,
    icon_outline: (color: string) => <PurchaseOutlineIcon color={color} />,
  },
  {
    name: 'Profile',
    component: Profile,
    icon_fill: (color: string) => <ProfileFillIcon color={color} />,
    icon_outline: (color: string) => <ProfileOutlineIcon color={color} />,
  },
];
const screens = [
  {
    name: 'Payment',
    component: Payment,
  },
  {
    name: 'PersonalInfo',
    component: PersonalInfo,
  },
  {
    name: 'Notification',
    component: Notification,
  },
  {
    name: 'Language',
    component: Language,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Verification',
    component: Verification,
  },
  {
    name: 'Notifications',
    component: Notifications,
  },
];

const BottomTab = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      {bottom_tabs.map(screen => (
        <BottomTabNavigator.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({focused, color}) =>
              focused ? screen.icon_fill(color) : screen.icon_outline(color),
          }}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="BottomTab" component={BottomTab} />
        {screens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
