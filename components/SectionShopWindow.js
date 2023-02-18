import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const SectionShopWindow = ({typeList, navigation}) => {
  const goToSectionDetail = () => {
    navigation.navigate('SectionDetail', {data: typeList});
  };
  return (
    <View key={typeList[0]['id']} style={Style.section}>
      <TouchableOpacity onPress={goToSectionDetail}>
        <Image source={{uri: typeList[0]['image']}} style={Style.image} />
        <Text>{typeList[0]['type']}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    height: 100,
    width: 100,
  },
  section: {
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
});
export default SectionShopWindow;
