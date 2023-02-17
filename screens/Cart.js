import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
const Cart = () => {

  const items = useSelector(state => state.cartReducer.items)
  let totalCost = 0
  console.log(items)
  const calculateCost = () => {
    for (const item in items){
      totalCost = totalCost + parseFloat(items[item].cost)
      console.log(totalCost)
    }
  }
  calculateCost()

  const renderItem = items.map(item => {
      return(
        <View key={item.id} style={Style.itemContainer}>
          <Image
          source={{
            uri: item.image,
          }}
          style={Style.image}
        />
          <Text>{item.title}</Text>
          <View style={{flexDirection:'row', marginRight:10}}>
            <Text>{item.cost}€</Text>
            <Text style={{marginLeft:5}}>X</Text>
          </View>
          
        </View>
      )
    })

  return (
    <ScrollView style={Style.container}>
      {renderItem}
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 60,
    width:60,
    marginVertical:10,
    marginLeft:10
  },
  itemContainer:{
    borderTopWidth:1,
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});
export default Cart;
