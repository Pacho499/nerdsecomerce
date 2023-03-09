import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { colors } from '../utils/colors';
const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={Styles.container}>
      <Text style={{fontSize:15, fontWeight:'600'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 40,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainBlue,
    borderRadius: 40,
    borderWidth: 2,
    marginVertical: 10,
    borderColor:colors.mainPurple
  },
});

export default CustomButton;
