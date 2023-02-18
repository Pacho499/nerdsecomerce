import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import ItemSell from './screens/ItemSell';
import Cart from './screens/Cart';
import Auth from './screens/Auth';
import Section from './screens/Section';
import Ionicons from '@expo/vector-icons/Ionicons';
import CheckOut from './screens/Checkout';
import SectionDetail from './screens/SectionDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#72ACD8'},
        }}
        name='Home'
        component={Home}
      />
      <Stack.Screen
        options={({route}) => ({title: route.params.data.title})}
        name='ItemDetail'
        component={ItemSell}
      />
      <Stack.Screen name='Checkout' component={CheckOut} />
    </Stack.Navigator>
  );
};

const NavigationSection = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#72ACD8'},
        }}
        name='SectionsHome'
        component={Section}
      />
      <Stack.Screen name='SectionDetail' component={SectionDetail} />
    </Stack.Navigator>
  );
};

const tabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            switch (route.name) {
              case 'HomeTab':
                iconName = focused ? 'md-home' : 'md-home-outline';
                break;
              case 'Cart':
                iconName = focused ? 'md-cart' : 'md-cart-outline';
                break;
              case 'sections':
                iconName = focused ? 'md-menu' : 'md-menu-outline';
                break;
              case 'user':
                iconName = focused ? 'md-log-in' : 'md-log-in-outline';
                break;
              default:
                break;
            }
            return <Ionicons name={iconName} size={20} />;
          },
          tabBarStyle: {
            backgroundColor: '#72ACD8',
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen
          options={{header: () => null}}
          name='HomeTab'
          component={NavigationHome}
        />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen
          options={{header: () => null}}
          name='sections'
          component={NavigationSection}
        />
        <Tab.Screen name='user' component={Auth} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default tabNavigation;
