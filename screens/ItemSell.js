import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton'
import ITEMS from '../fakeItemSell/ItemSells';
import ItemShopWindow from '../components/ItemShopWindow';

const ItemSell = ({route, navigation}) => {

  const suggestedItemByfranchise = ITEMS.filter(item => item.franchise === route.params.data.franchise)
  const renderSuggestedByFranch = suggestedItemByfranchise.map((value) => {
    return(
      <ItemShopWindow item={value} navigation={navigation}/> 
    )
  })
  const suggestedItemBytype = ITEMS.filter(item => item.type === route.params.data.type)
  const renderSuggestedByType = suggestedItemBytype.map((value) => {
    return(
      <ItemShopWindow item={value} navigation={navigation}/> 
    )
  })
  const item = route.params.data;
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.itemContainer}>
        <Image source={{uri: item.image}} style={Styles.image} />
        <Text>{item.title}</Text>
        <Text>{item.cost}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <CustomButton title='Aggiungi al carrello'/>
        <CustomButton title='Compra subito'/>
      </View>
      <Text>Perché hai visto prodotti {item.franchise}</Text>
      <ScrollView style={Styles.suggested} horizontal={true}>
        {renderSuggestedByFranch}
      </ScrollView>
      <Text>Perche hai visto prodotto di tipo {item.type}</Text>
      <ScrollView horizontal={true} style={Styles.suggested}>
        {renderSuggestedByType}
      </ScrollView>
        
    </ScrollView>
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
    margin: 'auto',
    resizeMode: 'contain',

  },
  itemContainer: {
    justifyContent:'center',
  },
  buttonsContainer:{
    alignItems:'center',
    marginTop: 20
  },
  suggested:{
    height:250
  }
});

export default ItemSell;
