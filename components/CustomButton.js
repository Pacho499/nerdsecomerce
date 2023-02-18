import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={Styles.container}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 40,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72ACD8',
    borderRadius: 40,
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default CustomButton;
