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
      {
        Object.values(items).length === 0 
        ? <Text style={{textAlign:'center', marginTop:100, fontSize:20}}>Aggiungi qualcosa al tuo carrello!</Text> 
        :  
        <>
        {renderItem}
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={Style.text}>Prezzo Totale: {totalCost.toFixed(2)}€</Text>
          <CustomButton title={'Acquista'} onPress={gotoCheckOut} />
        </View>
        </>
      } 
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    marginStart:10,
    marginVertical:15,
    fontSize:15,
    fontWeight:'500'
  }
});
export default Cart;
