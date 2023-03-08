import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { logout } from "../store/actions/AuthAction";
import { useDispatch } from "react-redux";
import { changeAdress, changeCard } from "../store/actions/AuthAction";
const User = () => {
    const dispatch = useDispatch();
    const adress = useSelector(state => state.authUser.adressInfo)
    const card = useSelector(state => state.authUser.cardData)
    const userId = useSelector(state => state.authUser.userId)
    const [modifyAdress, setModifyAdress] = useState(false)
    const [modifyCard, setModifyCard] = useState(false)
    const [form, setForm] = useState({
        city:'',
        adress:'',
        cardNumber:'',
        card:''
    })
    return(
        <View style={Style.container}>
            <Text>Impostazioni utente</Text>
            <View style={Style.box}>
                <Text>Il tuo indirizzo di spedizione predefinito</Text>
                <View>
                    <Text>Città: {adress.city}</Text>
                    <Text>Via/Piazza: {adress.adress}</Text>
                </View>
                {modifyAdress ? 
                    <View>
                        <TextInput style={Style.input} placeholder="città" value={form.city} onChangeText={text => {setForm({...form, city:text})}} />
                        <TextInput style={Style.input} placeholder="indirizzo" value={form.adress} onChangeText={text => {setForm({...form, adress:text})}} />  
                        <CustomButton title='Conferma' onPress={() => {
                            dispatch(changeAdress(form.adress, form.city, userId))
                            setModifyAdress(false)
                            }}/>
                    </View>                    
                :null}
                <CustomButton title={modifyAdress ? "Annulla" : "Cambia indirizzo"} onPress={() => {setModifyAdress(!modifyAdress)}}/>
            </View>
            <View style={Style.box}>
                <Text>La tua carta predefinita</Text>
                <View>
                    <Text>Circuito : {card.card}</Text>
                    <Text>Numero: {card.cardNumber.substr(12).padStart(16, '*')}</Text>  
                </View>
                {modifyCard ? 
                    <View>
                        <TextInput style={Style.input} placeholder="Numero" value={form.cardNumber} onChangeText={text => {setForm({...form, cardNumber:text})}} />
                        <TextInput style={Style.input} placeholder="Circuito" value={form.card} onChangeText={text => {setForm({...form, card:text})}} />  
                        <CustomButton title='Conferma' onPress={() => {
                            dispatch(changeCard(form.cardNumber, form.card, userId))
                            setModifyCard(false)
                            }}/>
                    </View>                    
                :null}
                <CustomButton title={modifyCard ? "Annulla" : "Cambia carta"} onPress={() => {setModifyCard(!modifyCard)}}/>
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
    },
    input: {
        width: '80%',
        marginTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
    },

})

export default User