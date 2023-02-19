import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import { removeItem } from '../store/actions/cartAction';
const Cart = (props) => {
  const items = useSelector((state) => state.cartReducer.items);
  const totalCost = useSelector((state) => state.cartReducer.cost);
  const dispatch = useDispatch()
  const gotoCheckOut = () => {
    props.navigation.navigate('Checkout');
  };

  const itemsToRender = items.filter((item, idx, array) => {
    return array.findIndex(itm => itm.id === item.id) === idx
  })

  const countItem = items.reduce((acc, item) => {
    const id = item.id
    if(!acc[id]){
      acc[id] = 1
    }else{
      acc[id] += 1
    }
    return acc
  }, {})

  const renderItem = itemsToRender.map((item) => {
    console.log('item in cart',item)
    return (
      <View key={item.id} style={Style.itemContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          style={Style.image}
        />
        <View style={{marginLeft: 20}}>
          <Text>{item.title}</Text>
          <Text>{item.cost}€</Text>
          <Text>Quantità {countItem[item.id]}</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
          <View style={Style.removeButton}>
            <Text>X</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  });

  return (
    <ScrollView style={Style.container}>
      {renderItem}
      <View>
        <Text>Totale: {totalCost.toFixed(2)}€</Text>
        <CustomButton title={'Acquista'} onPress={gotoCheckOut} />
      </View>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 10,
    marginLeft: 10,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    marginTop:10
  },
  removeButton:{
    padding: 10,
    backgroundColor: '#72ACD8',
    borderRadius:10,
  }
});
export default Cart;
