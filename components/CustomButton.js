import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const CustomButton = (props) => {
  return (
    <TouchableOpacity style={Styles.container}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
    container:{
        height:40,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#72ACD8',
        borderRadius:40
    }
})

export default CustomButton
