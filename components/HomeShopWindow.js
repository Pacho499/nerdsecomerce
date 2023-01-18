import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import ItemShopWindow from "./ItemShopWindow"
import ITEMS from "../fakeItemSell/ItemSells"

const HomeShopWindow = ({name}) => {
    const itemsSection = ITEMS[name]
    const renderItemShopWindow = itemsSection.map((value) => {
        return(
            <ItemShopWindow item={value}/>
        )
    })
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>{name}</Text>
            <ScrollView style={Styles.shopContainer} horizontal={true}>
                {renderItemShopWindow}
            </ScrollView>
            
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        marginTop: 20,
        alignItems:"center",
        borderWidth:2,
        width:'90%',
        height: 260,
        marginLeft: 17
    },
    title:{
        marginTop: 10,
        fontSize: 20
    },
})

export default HomeShopWindow