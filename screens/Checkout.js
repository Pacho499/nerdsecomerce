import React from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {useState} from 'react';
import CustomButton from '../components/CustomButton';

const CheckOut = () => {
  const [adress, setAdress] = useState('');
  const [creditCart, setCreditCart] = useState('');
  const [CVV, setCVV] = useState('');
  const [city, setCity] = useState('');
  const [client, setClient] = useState('');
  return (
    <KeyboardAvoidingView style={Style.container}>
      <Text>Indirizzo di spedizione e dati acquirente</Text>
      <TextInput
        placeholder='Città'
        style={Style.input}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        placeholder='Indirizzo'
        style={Style.input}
        value={adress}
        onChangeText={setAdress}
      />
      <TextInput
        placeholder='Nome e cognome'
        style={Style.input}
        value={client}
        onChangeText={setClient}
      />
      <Text>Metodo di pagamento</Text>
      <TextInput
        placeholder='Numero carta di credito'
        style={Style.input}
        value={creditCart}
        onChangeText={setCreditCart}
      />
      <TextInput
        placeholder='CVV'
        style={Style.input}
        value={CVV}
        onChangeText={setCVV}
      />
      <CustomButton title={'acquista'} />
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
    marginTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
});
export default CheckOut;
