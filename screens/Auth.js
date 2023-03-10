import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useState} from 'react';
import {signUp, logIn, removeError} from '../store/actions/AuthAction';
import {useDispatch} from 'react-redux';
import {colors} from '../utils/colors';
import {useSelector} from 'react-redux';
const Auth = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    cardNumber: '',
    card: '',
    adress: '',
    city: '',
    error:false
  });
  const isError = useSelector((state) => state.authUser.error);
  const errorMessage = useSelector((state) => state.authUser.errorMessage);
  const [isLogIn, setIsLogIn] = useState(true);
  const loading = useSelector((state) => state.authUser.loading)
  
  const SignUpVerification = () => {
    if(form.cardNumber.length !== 16 || form.adress.length < 1 || form.city.length < 1 || form.name.length < 1 ){
      setForm({...form, error:true})
      setTimeout(() => {
        setForm({...form, error:false})
      }, 4000);
    }else{
      dispatch(signUp(form));
    }
  }

  return (
    <KeyboardAvoidingView style={Style.container}>
      <ScrollView>
        {isLogIn ? (
          <Text style={{fontSize: 25, textAlign: 'center', marginVertical: 10}}>
            Accedi
          </Text>
        ) : (
          <Text style={{fontSize: 25, textAlign: 'center', marginVertical: 10}}>
            Iscriviti
          </Text>
        )}
        {loading ? <ActivityIndicator size='large' color={colors.mainPurple}/> :
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TextInput
            placeholder='E-mail'
            keyboardType='email-address'
            style={Style.input}
            value={form.email}
            onChangeText={(text) => {
              setForm({...form, email: text});
            }}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={Style.input}
            value={form.password}
            onChangeText={(text) => {
              setForm({...form, password: text});
            }}
          />
          {isLogIn ? null : (
            <>
              <TextInput
                placeholder='Nome Utente'
                style={Style.input}
                value={form.name}
                onChangeText={(text) => {
                  setForm({...form, name: text});
                }}
              />
              <Text style={{fontSize: 15, fontWeight: '500', marginTop: 30}}>
                Indirizzo di spedizione
              </Text>
              <TextInput
                placeholder='Citt??'
                style={Style.input}
                value={form.city}
                onChangeText={(text) => {
                  setForm({...form, city: text});
                }}
              />
              <TextInput
                placeholder='Indirizzo'
                style={Style.input}
                value={form.adress}
                onChangeText={(text) => {
                  setForm({...form, adress: text});
                }}
              />
              <Text style={{fontSize: 15, fontWeight: '500', marginTop: 30}}>
                Carta di credito
              </Text>
              <TextInput
                placeholder='Numero carta (16 numeri)'
                keyboardType='number-pad'
                style={Style.input}
                value={form.cardNumber}
                onChangeText={(text) => {
                  setForm({...form, cardNumber: text});
                }}
              />
              <TextInput
                placeholder='Visa / Mastercard'
                style={Style.input}
                value={form.card}
                onChangeText={(text) => {
                  setForm({...form, card: text});
                }}
              />
            </>
          )}
          {isError ? <Text style={Style.error}>{errorMessage}</Text> : null}
          {form.error ? <Text style={Style.error}>Tutti i campi devono essere compilati, la tua carta contiene {form.cardNumber.length} cifre</Text> : null}
        </View>}
        {isLogIn ? (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <CustomButton
              title={'Accedi'}
              onPress={() => {
                dispatch(logIn(form.email, form.password));
              }}
            />
            <CustomButton
              title={'Iscriviti'}
              onPress={() => {
                setIsLogIn(false);
                dispatch(removeError());
              }}
            />
          </View>
        ) : (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <CustomButton title={'Accedi'} onPress={() => setIsLogIn(true)} />
            <CustomButton
              title={'Iscriviti'}
              onPress={() => {SignUpVerification()}}
            />
          </View>
        )}
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
    borderColor: colors.mainPurple,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
  error: {
    textAlign: 'center',
    color: colors.error,
    fontSize: 20,
    marginVertical: 20,
  },
});
export default Auth;
