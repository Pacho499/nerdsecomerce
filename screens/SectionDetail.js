import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SectionDetail = ({route}) => {
  const items = route.params.data;
  return (
    <View style={Style.container}>
      <Text>SectionDetail!</Text>
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
export default SectionDetail;
