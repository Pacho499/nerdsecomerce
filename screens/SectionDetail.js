import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Item from '../components/Item';

const SectionDetail = ({route}) => {
  const items = route.params.data;
  console.log(items)
  const renderItems = items.map((item) => <Item item={item} isCart={false}/>)
  return (
    <View style={Style.container}>
      <ScrollView>
        {renderItems}
      </ScrollView>
      
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SectionDetail;
