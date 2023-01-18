import React from "react"
import { Text , View, StyleSheet } from "react-native"
import ITEMS from "../fakeItemSell/ItemSells"
const ItemSell = () => {
    return(
     <View style={Styles.container}>
        <Text style={Styles.text}>ciaomdonod</Text>
    </View>   
    )
    
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      text:{
        backgroundColor:'red'
      }
})

export default ItemSell