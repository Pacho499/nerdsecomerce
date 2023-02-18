import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';

const Section = () => {
  const items = useSelector(state => state.ItemSell.items) 

  let typeList = {}
  for (let i = 0; i < items.length; i++) {
    let type = items[i].type;
    if (!typeList.hasOwnProperty(type)) {
      typeList[type] = [items[i]];
    }else{
      typeList[type].push(items[i]);
    }
  }
  console.log(typeList)
  const renderList = Object.keys(typeList).map(type => {
    return(
      <View style={Style.section}>
        <TouchableOpacity key={typeList[type][0]['id']} >
          <Image source={{uri: typeList[type][0]['image']}} style={Style.image} />
          <Text>{type}</Text>
        </TouchableOpacity>
      </View>
      
    )
  })

  return (
    <ScrollView>
        <View style={Style.container}>
          {renderList}
        </View>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  image:{
    height:100,
    width:100
  },
  section:{
    borderWidth: 1,
    width:150,
    alignItems:'center',
    margin:10,
    padding: 5
  }
});
export default Section;
