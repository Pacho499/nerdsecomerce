import React, {useState} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import HomeShopWindow from '../components/HomeShopWindow';
import ITEMS from '../fakeItemSell/ItemSells';

const Home = () => {
  const [text, setText] = useState('');
    const boh = Object.keys(ITEMS)
    console.log(boh)

    const renderHomeShop = boh.map((value) => {
        return <HomeShopWindow name={value}/>
    })
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
