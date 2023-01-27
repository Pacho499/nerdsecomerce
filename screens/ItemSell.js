import React from 'react';
import {View, StyleSheet, Text, Image, } from 'react-native';
import CustomButton from '../components/CustomButton'

const ItemSell = ({route}) => {
  const item = route.params.data;
  return (
    <View style={Styles.container}>
      <View style={Styles.itemContainer}>
        <Image source={{uri: item.image}} style={Styles.image} />
        <Text>{item.title}</Text>
        <Text>{item.cost}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <CustomButton title='Aggiungi al carrello'/>
        <CustomButton title='Compra subito'/>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    backgroundColor: 'red',
  },
  image: {
    height: 300,
    width: '80%',
    margin: 'auto',
    resizeMode: 'contain',
  },
  itemContainer: {
    flex: 1,
    justifyContent:'center',
  },
  buttonsContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
});

export default ItemSell;
