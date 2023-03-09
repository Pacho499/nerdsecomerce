import React from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton'
import { useState } from 'react';
import { signUp, logIn } from '../store/actions/AuthAction';
import { useDispatch } from 'react-redux';
const Auth = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email:'',
    password:'',
    name:'',
    cardNumber:null,
    card:'',
    adress:'',
    city:''
  })
  const [isLogIn, setIsLogIn] = useState(true)
  return (
    <KeyboardAvoidingView style={Style.container}>
      <ScrollView>
      {isLogIn ? <Text style={{fontSize:25, textAlign:'center', marginVertical:10}}>Accedi</Text> : <Text>Iscriviti</Text>}
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <TextInput
          placeholder='email'
          keyboardType='email-address'
          style={Style.input}
          value={form.email}
          onChangeText={text => {setForm({...form, email:text})}}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={Style.input}
          value={form.password}
          onChangeText={text => {setForm({...form, password:text})}}
        />
        {isLogIn ? null :
        <>
        <TextInput
          placeholder='Nome Utente'
          style={Style.input}
          value={form.name}
          onChangeText={text => {setForm({...form, name:text})}}
        />
        <Text>Indirizzo di spedizione</Text>
        <TextInput
          placeholder='Città'
          style={Style.input}
          value={form.city}
          onChangeText={text => {setForm({...form, city:text})}}
        />
        <TextInput
          placeholder='Indirizzo'
          style={Style.input}
          value={form.adress}
          onChangeText={text => {setForm({...form, adress:text})}}
        />
          <Text>Carta di credito</Text>
          <TextInput
            placeholder='Numero carta (16 numeri)'
            keyboardType='number-pad'
            style={Style.input}
            value={form.cardNumber}
            onChangeText={text => {setForm({...form, cardNumber:text})}}
          />
          <TextInput
            placeholder='Visa / Mastercard'
            style={Style.input}
            value={form.card}
            onChangeText={text => {setForm({...form, card:text})}}
          />
        </> 
          
        }
      </View>
      {isLogIn ? <View style={{alignItems:'center', justifyContent:'center'}}>
        <CustomButton title={'Accedi'} onPress={() => {dispatch(logIn(form.email, form.password))}}/>
        <CustomButton title={'Iscriviti'} onPress={() => setIsLogIn(false)}/>
      </View> : 
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <CustomButton title={'Accedi'} onPress={() => setIsLogIn(true)}/>
        <CustomButton title={'Iscriviti'} onPress={() => {dispatch(signUp(form))}}/>
      </View>
      }
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
});
export default Auth;
