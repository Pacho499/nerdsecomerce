import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, ScrollView, Button} from 'react-native';
import HomeShopWindow from '../components/HomeShopWindow';
import Axios from 'axios'
import { fetchItems } from '../store/actions/itemSellActions';
import { useDispatch, useSelector } from 'react-redux';
import SuggestedSearchBar from '../components/SuggestedSearchBar';


const Home = (props) => {
  //use at the end to structure the databse + create a button <Button title='carica dati'onPress={onSubmitData}/>
  // const onSubmitData = async () => {
  //   const url = 'https://nerdsecomerce-default-rtdb.firebaseio.com/itemSell.json'
  //   for (const item in ITEMS){
  //     try {
  //       const data = await Axios.post(url, {
  //       id : ITEMS[item].id, 
  //       image : ITEMS[item].image,
  //       title : ITEMS[item].title,
  //       type : ITEMS[item].type,
  //       cost : ITEMS[item].cost,
  //       franchise : ITEMS[item].franchise
  //     })
  //     } catch (error) {
  //       console.log(error)
  //     }
      
  //   }
  // };
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [viewSuggest, setViewSuggest] = useState(false)
  useEffect(() => {
    dispatch(fetchItems())
  }, [])
  useEffect(() => {
    if(text === ''){
      setViewSuggest(false)
    }else{
      setViewSuggest(true)
    }
  },[text])
  const items = useSelector(state => state.ItemSell.items) 
  let franchiseList = {};

  //set the item based on their franchise
  for (let i = 0; i < items.length; i++) {
    let franchise = items[i].franchise;
    if (!franchiseList.hasOwnProperty(franchise)) {
      franchiseList[franchise] = [items[i]];
    }else{
      franchiseList[franchise].push(items[i]);
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
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Cerca un prodotto su Nerds' value={text} onChangeText={setText}/>
        {viewSuggest ? <SuggestedSearchBar navigation={props.navigation} input={text} items={items}/> : null}
      </View>
      
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  inputContainer:{
    width:'100%',
    alignItems:'center',
    zIndex:10
  }
});

export default Home;
