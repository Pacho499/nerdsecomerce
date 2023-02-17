import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton'
import ItemShopWindow from '../components/ItemShopWindow';
import BuyNowModal from '../components/modals/BuyNowModal';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/actions/cartAction';

const ItemSell = ({route, navigation}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.ItemSell.items)
  const suggestedItemByfranchise = items.filter(item => item.franchise === route.params.data.franchise)
  const renderSuggestedByFranch = suggestedItemByfranchise.map((value) => {
    return(
      <ItemShopWindow key={`Franchise ${value.id}`} item={value} navigation={navigation}/> 
    )
  })

  const suggestedItemBytype = items.filter(item => item.type === route.params.data.type)
  const renderSuggestedByType = suggestedItemBytype.map((value) => {
    return(
      <ItemShopWindow key={`Type ${value.id}`} item={value} navigation={navigation}/> 
    )
  })

  const openModal = () => {
    setModalView(true)
  }

  const addItemToCart = () => {
    dispatch(addItem(item))
  }
  const [modalView, setModalView] = useState(false)
  const item = route.params.data;
  return (
    <ScrollView style={Styles.container}>
      <BuyNowModal onClose={() => {setModalView(false)}} visible={modalView} navigation={navigation}/>
      <View style={Styles.itemContainer}>
        <Image source={{uri: item.image}} style={Styles.image} />
        <Text>{item.title}</Text>
        <Text>{item.cost}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <CustomButton onPress={addItemToCart} title='Aggiungi al carrello'/>
        <CustomButton onPress={openModal} title='Compra subito'/>
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
