import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import CustomButton from '../components/CustomButton';
import UserDataReview from '../components/UserDataReview';
import { useSelector } from 'react-redux';
import { colors } from '../utils/colors';
import { removeAll } from '../store/actions/cartAction';
import { useDispatch } from 'react-redux';
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
})
const[readyToBuy, setReadyToBuy] = useState(false)

useEffect(() => {
  if((formState.CVV.length === 3) && (formState.creditCart.length === 16) ){
    setReadyToBuy(true)
  }else{
    setReadyToBuy(false)
  }   
}, [formState])

const buyed = () => {
  setFormState({...formState, buyed:true})
   setTimeout(() => {
       setFormState({...formState, city:'', adress:'', creditCart:'', CVV:'', buyed:false})
       dispatch(removeAll())
       props.navigation.navigate('Home')
   }, 3000);
}
  return (
    <KeyboardAvoidingView style={Style.container}>
      { formState.buyed ? <Text>Acquisto effettuato con successo!</Text> :
      token ? <UserDataReview buyed={buyed} /> :
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
