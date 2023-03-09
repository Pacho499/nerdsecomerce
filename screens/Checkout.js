import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import UserDataReview from '../components/UserDataReview';
import { useSelector } from 'react-redux';
import { colors } from '../utils/colors';
import { removeAll } from '../store/actions/cartAction';
import { useDispatch } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import TransitionError from '../components/TransitionError';
import TransitionDone from '../components/TransitionDone';
const CheckOut = (props) => {
  const token = useSelector(state => state.authUser.token)
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    adress: '',
    creditCart: '',
    CVV: '',
    city:  '',
    client: '',
    buyed:false,
    error:false
})
const[readyToBuy, setReadyToBuy] = useState(false)

useEffect(() => {
  console.log(formState)
  if((formState.CVV.length === 3) && (formState.creditCart.length === 16) ){
    setReadyToBuy(true)
  }else{
    setReadyToBuy(false)
  }   
}, [formState])

const buyed = () => {
  console.log(formState.CVV)
  if(formState.CVV.length !== 3){
         setFormState({...formState, buyed:true, error:true})
          setTimeout(() => {
            props.navigation.navigate('Home')
          }, 3000);
  }else{
        setFormState({...formState, buyed:true, error:false})
        dispatch(removeAll())
        setTimeout(() => {
          setFormState({...formState, city:'', adress:'', creditCart:'', CVV:'', buyed:false})
          props.navigation.navigate('Home')
        }, 4000);
       }
}
  return (
    <KeyboardAvoidingView style={Style.container}>
      { formState.error ? 
        <TransitionError/>
        : 
        formState.buyed ? 
        <TransitionDone/>
      :
      token ? 
      <>
       <UserDataReview buyed={buyed} navigation={props.navigation} />
       <TextInput
        placeholder='CVV'
        style={Style.input}
        value={formState.CVV}
        onChangeText={text => setFormState({...formState,CVV:text})}
        />
        <CustomButton onPress={buyed} title={'acquista'} /> 
      </>
      :
      <>
        <Text style={{fontSize:20, marginTop:20}}>Indirizzo di spedizione e dati acquirente</Text>
      <TextInput
        placeholder='Città'
        style={Style.input}
        value={formState.city}
        onChangeText={text => setFormState({...formState,city:text})}
      />
      <TextInput
        placeholder='Indirizzo'
        style={Style.input}
        value={formState.adress}
        onChangeText={text => setFormState({...formState,adress:text})}
      />
      <TextInput
        placeholder='Nome e cognome'
        style={Style.input}
        value={formState.client}
        onChangeText={text => setFormState({...formState,client:text})}
      />
      <Text style={{fontSize:20, marginTop:30}}>Metodo di pagamento</Text>
      <TextInput
        placeholder='Numero carta di credito (16 numeri)'
        style={Style.input}
        value={formState.creditCart}
        onChangeText={text => setFormState({...formState,creditCart:text})}
      />
      <TextInput
        placeholder='CVV'
        style={Style.input}
        value={formState.CVV}
        onChangeText={text => setFormState({...formState,CVV:text})}
      />
      {readyToBuy ? <CustomButton onPress={buyed} title={'acquista'} /> : <CustomButton title={'Compila i campi'}/>}
      </>
      }
      
    </KeyboardAvoidingView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  input: {
    width: '80%',
    marginTop: 10,
    borderColor:colors.mainPurple,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
});
export default CheckOut;
