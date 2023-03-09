import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';

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
    borderRadius: 20,
    padding: 10,
    borderColor: colors.mainPurple,
    backgroundColor: '#fffefe',
    shadowColor: colors.mainPurple,
    shadowOpacity: 0.6,
    shadowOffset: {width: 5, height: 5},
    elevation: 10,
  },
  image: {
    height: 70,
    width: '100%',
    marginBottom: 10,
  },
  productName: {
    marginLeft: 5,
    height: 50,
    fontWeight: '600',
  },
  price: {
    marginLeft: 5,
    fontWeight: '600',
  },
});

export default ItemShopWindow;
