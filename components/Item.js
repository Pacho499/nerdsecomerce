import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { removeItem, addItem } from "../store/actions/cartAction"
const Item = ({item, isCart, count}) => {
    const dispatch = useDispatch()
    return(
        <View key={item.id} style={Styles.container}>
            <Image
            source={{
                uri: item.image,
            }}
            style={Styles.image}
            />
            <View style={{marginLeft: 20, width:'50%'}}>
                <Text>{item.title}</Text>
                <Text>{item.cost}€</Text>
                {isCart ? <Text>Quantità {count[item.id]}</Text> : null}
            </View>
            {isCart ? 
                <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
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
      }
})

export default Item