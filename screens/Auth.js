import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Auth = () => {
  return (
    <View style={Style.container}>
      <Text>auth!</Text>
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
export default Auth;
