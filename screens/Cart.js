import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Cart = () => {
  return (
    <View style={Style.container}>
      <Text>carello!</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default Cart;
