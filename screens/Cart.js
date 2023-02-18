import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
const Cart = (props) => {

  const items = useSelector(state => state.cartReducer.items)
  const totalCost = useSelector(state => state.cartReducer.cost)

  const gotoCheckOut = () => {
    props.navigation.navigate('Checkout')
  }

  const renderItem = items.map(item => {
      return(
        <View key={item.id} style={Style.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={Style.image}
          />
          <View style={{marginLeft:20}}>
            <Text>{item.title}</Text>
            <Text>{item.cost}€</Text>
            
          </View>
        </View>
      )
    })

  return (
    <ScrollView style={Style.container}>
      {renderItem}
      <View>
        <Text>Totale: {totalCost.toFixed(2)}€</Text>
        <CustomButton title={'Acquista'} onPress={gotoCheckOut}/>
      </View>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 100,
    width:100,
    marginVertical:10,
    marginLeft:10
  },
  itemContainer:{
    borderTopWidth:1,
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
  }
});
export default Cart;
