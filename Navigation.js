import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveData} from './store/actions/AuthAction';
import Home from './screens/Home';
import ItemSell from './screens/ItemSell';
import Cart from './screens/Cart';
import Auth from './screens/Auth';
import Section from './screens/Section';
import Ionicons from '@expo/vector-icons/Ionicons';
import CheckOut from './screens/Checkout';
import SectionDetail from './screens/SectionDetail';
import User from './screens/User';
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
          title: 'Sezioni',
        }}
        name='SectionsHome'
        component={Section}
      />
      <Stack.Screen
        name='SectionDetail'
        component={SectionDetail}
        options={({route}) => ({title: route.params.data[0].type})}
      />
    </Stack.Navigator>
  );
};

const tabNavigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch]);
  const token = useSelector((state) => state.authUser.token);
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
              case 'userSettings':
                iconName = focused ? 'md-body' : 'md-body-outline';
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
        <Tab.Screen
          name='Cart'
          options={{title: 'Carrello'}}
          component={Cart}
        />
        <Tab.Screen
          options={{header: () => null, title: 'Sezioni'}}
          name='sections'
          component={NavigationSection}
        />
        {token ? (
          <Tab.Screen name='userSettings' component={User} />
        ) : (
          <Tab.Screen name='user' component={Auth} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default tabNavigation;
