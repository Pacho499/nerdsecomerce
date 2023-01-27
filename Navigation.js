import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import ItemSell from './screens/ItemSell';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#72ACD8'},
          }}
          name='Home'
          component={Home}
        />
        <Stack.Screen name='ItemDetail' component={ItemSell}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;