import React, {useState} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import HomeShopWindow from '../components/HomeShopWindow';
import ITEMS from '../fakeItemSell/ItemSells';

const Home = (props) => {
  const [text, setText] = useState('');
  // const franchiseList = Object.keys(ITEMS); 
  let franchiseList = {};

  //set the item based on their franchise
  for (let i = 0; i < ITEMS.length; i++) {
    let franchise = ITEMS[i].franchise;
    if (!franchiseList.hasOwnProperty(franchise)) {
      franchiseList[franchise] = [ITEMS[i]];
    }else{
      franchiseList[franchise].push(ITEMS[i]);
    }
    
  }

  const renderHomeShop = Object.keys(franchiseList).map((franchise, index) => {
    return (
      <HomeShopWindow
        key={index}
        navigation={props.navigation}
        franchiseName={franchise}
        itemList={franchiseList[franchise]}
      />
    );
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Cerca un prodotto su Nerds'
        value={text}
        onChange={(e) => setText(e)}
      />
      <ScrollView>
        {renderHomeShop}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: 25,
    width: '90%',
    borderColor: 'black',
    borderWidth: '1',
    padding: 10,
    borderRadius: 20,
  },
});

export default Home;
