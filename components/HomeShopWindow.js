import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemShopWindow from './ItemShopWindow';
import { colors } from '../utils/colors';

const HomeShopWindow = ({franchiseName, navigation, itemList}) => {
  const renderItemShopWindow = itemList.map((item, index) => {
    return <ItemShopWindow key={index} item={item} navigation={navigation} />;
  });
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{franchiseName}</Text>
      <ScrollView style={Styles.shopContainer} horizontal={true}>
        {renderItemShopWindow}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 2,
    width: '90%',
    height: 260,
    marginLeft: 17,
    borderColor:colors.secondaryBlue,
    borderRadius:20,
    backgroundColor:colors.mainBlue,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight:'10',
    color:colors.secondaryPurple
  },
});

export default HomeShopWindow;
