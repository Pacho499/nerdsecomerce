import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors } from '../utils/colors';

const SectionShopWindow = ({typeList, navigation}) => {
  const goToSectionDetail = () => {
    navigation.navigate('SectionDetail', {data: typeList});
  };
  return (
    <View key={typeList[0]['id']} style={Style.section}>
      <TouchableOpacity onPress={goToSectionDetail}>
        <Image source={{uri: typeList[0]['image']}} style={Style.image} />
        <Text style={{textAlign:'center', marginTop:10, fontSize:15, fontWeight:'600'}}>{typeList[0]['type']}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  section: {
    borderWidth: 2,
    borderColor:colors.mainPurple,
    borderRadius:20,
    width: 150,
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
});
export default SectionShopWindow;
