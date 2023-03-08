import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { logout } from "../store/actions/AuthAction";
import { useDispatch } from "react-redux";
const User = () => {
    const dispatch = useDispatch();
    const adress = useSelector(state => state.authUser.adressInfo)
    const card = useSelector(state => state.authUser.cardData)
    return(
        <View style={Style.container}>
            <Text>Impostazioni utente</Text>
            <View style={Style.box}>
                <Text>Il tuo indirizzo di spedizione predefinito</Text>
                <View>
                    <Text>Città: {adress.city}</Text>
                    <Text>Via/Piazza: {adress.adress}</Text>
                </View>
                <CustomButton title="Cambia indirizzo"/>
            </View>
            <View style={Style.box}>
                <Text>La tua carta predefinita</Text>
                <Text>Circuito : {card.card}</Text>
                <Text>Numero: {card.cardNumber.substr(12).padStart(16, '*')}</Text>
                <CustomButton title="Cambia carta"/>
            </View>
            <CustomButton title='LogOut' onPress={() => {dispatch(logout())}} />
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    box:{
        width:'90%',
        margin:'auto',
        borderWidth:2,
        borderColor:'black',
        textAlign:'center',
        marginTop:20,
    }
})

export default User