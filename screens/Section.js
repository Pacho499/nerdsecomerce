import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SectionShopWindow from '../components/SectionShopWindow';

const Section = (props) => {
  const items = useSelector((state) => state.ItemSell.items);

  let typeList = {};
  for (let i = 0; i < items.length; i++) {
    let type = items[i].type;
    if (!typeList.hasOwnProperty(type)) {
      typeList[type] = [items[i]];
    } else {
      typeList[type].push(items[i]);
    }
  }
  const renderList = Object.keys(typeList).map((type,idx) => {
    return (
      <SectionShopWindow
        key={idx}
        typeList={typeList[type]}
        navigation={props.navigation}
      />
    );
  });

  return <View style={Style.container}>{renderList}</View>;
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
export default Section;
