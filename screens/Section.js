import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Section = () => {
  return (
    <View style={Style.container}>
      <Text>SEZIONI!</Text>
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
export default Section;
