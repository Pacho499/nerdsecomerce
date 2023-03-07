import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ItemSection from '../components/ItemSection';

const SectionDetail = ({route}) => {
  const items = route.params.data;
  const renderItems = items.map((item) => <ItemSection key={item.id} item={item}/>)
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
