import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveData} from './store/actions/AuthAction';
import {colors} from './utils/colors';
import Home from './screens/Home';
import ItemSell from './screens/ItemSell';
import Cart from './screens/Cart';
import Auth from './screens/Auth';
import Section from './screens/Section';
import Ionicons from '@expo/vector-icons/Ionicons';
import CheckOut from './screens/Checkout';
import SectionDetail from './screens/SectionDetail';
import User from './screens/User';
import {isIos} from './utils/helper';
import CustomHeader from './components/CustomHeader';
import { ActivityIndicator, View } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NavigationHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.mainBlue,
        },
      }}
    >
      <Stack.Screen
        options={
          isIos
            ? {
                title: 'Home',
              }
            : {
                header: () => <CustomHeader title='Home' />,
              }
        }
        name='Home'
        component={Home}
      />
      <Stack.Screen
        options={
          isIos
            ? ({route}) => ({title: route.params.data.title})
            : ({route}) => ({
                header: () => (
                  <CustomHeader
                    title={route.params.data.title}
                    back={true}
                    backPage={'Home'}
                  />
                ),
              })
        }
        name='ItemDetail'
        component={ItemSell}
      />
      <Stack.Screen
        options={
          isIos
            ? null
            : {
                header: () => (
                  <CustomHeader
                    title='CheckOut'
                    back={true}
                    backPage={'Home'}
                  />
                ),
              }
        }
        name='Checkout'
        component={CheckOut}
      />
    </Stack.Navigator>
  );
};

const NavigationSection = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.mainBlue,
        },
      }}
    >
      <Stack.Screen
        options={
          isIos
            ? {title: 'Sezioni'}
            : {header: () => <CustomHeader title='Sezioni' />}
        }
        name='SectionsHome'
        component={Section}
      />
      <Stack.Screen
        name='SectionDetail'
        component={SectionDetail}
        options={
          isIos
            ? ({route}) => ({title: route.params.data[0].type})
            : ({route}) => ({
                header: () => (
                  <CustomHeader
                    title={route.params.data[0].type}
                    back={true}
                    backPage='SectionsHome'
                  />
                ),
              })
        }
      />
    </Stack.Navigator>
  );
};

const tabNavigation = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authUser.loading)
  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch]);
  const token = useSelector((state) => state.authUser.token);
  const items = useSelector((state) => state.cartReducer.items);
  return (
    <NavigationContainer>
      {loading ? 
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <ActivityIndicator size='large' color={colors.mainPurple}/> 
      </View>
      
      :<Tab.Navigator
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
            return (
              <Ionicons name={iconName} color={colors.mainPurple} size={20} />
            );
          },
          tabBarStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerTitleAlign: 'center',
          tabBarLabel: () => {
            return null;
          },
        })}
      >
        <Tab.Screen
          options={{title: 'Home', header: () => null}}
          name='HomeTab'
          component={NavigationHome}
        />
        <Tab.Screen
          name='Cart'
          options={() => ({
            title: 'Carrello',
            tabBarBadge:
              Object.values(items).length > 0
                ? Object.values(items).length
                : null,
          })}
          component={Cart}
        />
        <Tab.Screen
          options={{title: 'Sezioni', header: () => null}}
          name='sections'
          component={NavigationSection}
        />
        {token ? (
          <Tab.Screen
            name='userSettings'
            component={User}
            options={{title: 'Utente'}}
          />
        ) : (
          <Tab.Screen name='user' options={{title: 'LogIn'}} component={Auth} />
        )}
      </Tab.Navigator>}
    </NavigationContainer>
  );
};

export default tabNavigation;
