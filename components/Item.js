import { useState } from "react"
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { removeItem, addItem, fastAddItem } from "../store/actions/cartAction"
const Item = ({item, isCart}) => {
    const dispatch = useDispatch()
    console.log(item)
    return(
        <View key={isCart ? item.item.id : item.id} style={Styles.container}>
            <Image
            source={{
                uri: isCart ? item.item.image : item.image
            }}
            style={Styles.image}
            />
            <View style={{marginLeft: 20, width:'50%'}}>
                <View style={{}}>
                   <Text>{isCart ? item.item.title : item.title}</Text>
                    <Text>{isCart ? item.item.cost : item.cost}€</Text>
                    {isCart ? <Text>Quantità {item.quantity}</Text> : null} 
                </View>
                {isCart ? <View style={Styles.buttonContainer}>
                    <TouchableOpacity onPress={() => dispatch(fastAddItem(item.item.id))}>
                        <View style={Styles.quantityButton}>
                            <Text>x</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => dispatch(fastAddItem(item.item.id))}>
                        <View style={Styles.quantityButton}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity> 
                </View> : null}
            </View>
            {isCart ? 
                <TouchableOpacity onPress={() => dispatch(removeItem(item.item))}>
                    <View style={Styles.removeButton}>
                        <Text>X</Text>
                    </View>
                </TouchableOpacity> 
                : 
                <TouchableOpacity onPress={() => dispatch(addItem(item))}>
                    <View style={Styles.removeButton}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

const Styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        marginVertical: 10,
        marginLeft: 10,
      },
      container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
        
      },
      removeButton:{
        padding: 10,
        backgroundColor: '#72ACD8',
        borderRadius:10,
        marginLeft:20
      },
      buttonContainer:{
        flexDirection:'row'
      },
      quantityButton:{
        backgroundColor:'#72ACD8',
        margin:2,
        padding:10,
        borderRadius:10,
      }
})

export default Item