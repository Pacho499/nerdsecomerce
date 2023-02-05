import React, { useState } from 'react';
import {TouchableOpacity, Text, StyleSheet, Modal, View, TextInput} from 'react-native';
import CustomButton from './CustomButton';
const BuyNowModal = (props) => {

    const [adress, setAdress] = useState('')
    const [creditCart, setCreditCart] = useState('')
    const [CVV, setCVV] = useState('')

    const goToLogIn = () => {
        props.navigation.navigate('user')
        props.onClose()
    }
  return (
   <Modal transparent onRequestClose={props.onClose}  animationType='slide' visible={props.visible}>
        <TouchableOpacity onPress={props.onClose}>
                <View style={Styles.close}></View>
        </TouchableOpacity>
        <View style={Styles.modal}>
            <View style={Styles.formContainer}>
                <TextInput placeholder='Indirizzo' style={Styles.input} value={adress} onChangeText={setAdress}/>
                <TextInput placeholder='Numero carta di credito' style={Styles.input} value={creditCart} onChangeText={setCreditCart}/>
                <TextInput placeholder='CVV' style={Styles.input} value={CVV} onChangeText={setCVV}/>
                <CustomButton title='Compra' onPress={props.onClose} />
            </View>
            <View style={Styles.container}>
                <Text>Effettua l'accesso per rendere l'operazione più veloce</Text>
                <CustomButton title='Chiudi' onPress={props.onClose} />
                <CustomButton title='Accedi' onPress={goToLogIn} />
            </View>   
        </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
    formContainer:{
        alignItems:'center',
    },
    input:{
        width:'80%',
        marginTop:30,
        paddingBottom:10,
        paddingHorizontal:10,
        borderBottomColor:'black',
        borderBottomWidth:2
    },
    close:{
        height:400,
        width:'100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    modal:{
        backgroundColor:'white',
        height:'100%'
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    }
})

export default BuyNowModal