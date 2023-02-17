import { useEffect } from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"

const SuggestedSearchBar = ({input, items, navigation}) => {

    const renderSuggest = items.filter(item => item.title.includes(input)).map(item => {
        const gotoItemDetail = () =>  {navigation.navigate('ItemDetail', {
            data:item
        })}
        return (
            <TouchableWithoutFeedback key={item.id} onPress={gotoItemDetail}>
                <Text style={Style.text}>{item.title}</Text>
            </TouchableWithoutFeedback>
            
        )
    })
    return(
        <View style={Style.container}>
            {renderSuggest}
        </View>  
    )
    
}

const Style = StyleSheet.create({
    container:{
        width:'90%',
        borderColor : 'black',
        position: 'absolute',
        top:75,
        zIndex:20,
    },
    text:{
        padding: 10,
        borderWidth:1,
        backgroundColor:'white',
    }
})

export default SuggestedSearchBar