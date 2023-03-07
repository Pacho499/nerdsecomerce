import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { removeItem, fastAddItem } from "../store/actions/cartAction"
const ItemCart = ({item}) => {
    const dispatch = useDispatch()
    return(
        <View key={item.item.id} style={Styles.container}>
            <Image
            source={{
                uri: item.item.image
            }}
            style={Styles.image}
            />
            <View style={{marginLeft: 20, width:'50%'}}>
                <View style={{}}>
                   <Text>{item.item.title}</Text>
                    <Text>{item.item.cost}€</Text>
                    <Text>Quantità {item.quantity}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    {/* <TouchableOpacity onPress={() => dispatch(fastAddItem(item.item.id))}>
                        <View style={Styles.quantityButton}>
                            <Text>-</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => dispatch(fastAddItem(item.item.id))}>
                        <View style={Styles.quantityButton}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity>  */}
                </View> 
            </View>
                <TouchableOpacity onPress={() => dispatch(removeItem(item.item))}>
                    <View style={Styles.removeButton}>
                        <Text>X</Text>
                    </View>
                </TouchableOpacity> 
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

export default ItemCart