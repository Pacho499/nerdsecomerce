import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import Item from '../components/Item'
const Cart = (props) => {
  const items = useSelector((state) => state.cartReducer.items);
  const totalCost = useSelector((state) => state.cartReducer.cost);
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
    return <Item isCart={true} item={item} count={countItem}/>;
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
});
export default Cart;
