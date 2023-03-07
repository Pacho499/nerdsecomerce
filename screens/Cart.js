import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import ItemCart from '../components/ItemCart'
const Cart = (props) => {
  const items = useSelector((state) => state.cartReducer.items);
  const totalCost = useSelector((state) => state.cartReducer.cost);
  const gotoCheckOut = () => {
    props.navigation.navigate('Checkout');
  };

  const renderItem = Object.values(items).map((item) => {
    return <ItemCart key={item.item.id} item={item} />;
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
