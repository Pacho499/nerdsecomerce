import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ItemShopWindow = ({item, navigation}) => {
  const gotoItemDetail = () => {
    navigation.navigate('ItemDetail', {
      data: item,
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={gotoItemDetail} style={Styles.container}>
        <Image
          source={{
            uri: item.image,
          }}
          style={Styles.image}
        />
        <Text style={Styles.productName}>{item.title}</Text>
        <Text style={Styles.price}>{item.cost}€</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: 100,
    marginHorizontal: 10,
    height: '80%',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    height: 100,
    width: '100%',
    marginBottom: 10,
  },
  productName: {
    marginLeft: 5,
    height: 40,
  },
  price: {
    marginLeft: 5,
  },
});

export default ItemShopWindow;
