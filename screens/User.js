import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import {logout} from '../store/actions/AuthAction';
import {useDispatch} from 'react-redux';
import {changeAdress, changeCard} from '../store/actions/AuthAction';
import {colors} from '../utils/colors';
const User = () => {
  const dispatch = useDispatch();
  const adress = useSelector((state) => state.authUser.adressInfo);
  const card = useSelector((state) => state.authUser.cardData);
  const userId = useSelector((state) => state.authUser.userId);
  const [modifyAdress, setModifyAdress] = useState(false);
  const [modifyCard, setModifyCard] = useState(false);
  const [form, setForm] = useState({
    city: '',
    adress: '',
    cardNumber: '',
    card: '',
    errorCard: false,
    errorAdress: false,
  });

  const changeCardButton = () => {
    if (form.cardNumber.length !== 16 || form.card < 1) {
      setForm({...form, errorCard: true});
    } else {
      dispatch(changeCard(form.cardNumber, form.card, userId));
      setModifyCard(false);
      setForm({...form, errorCard: true});
    }
  };

  const changeAdressButton = () => {
    if (form.adress === '' || form.city === '') {
      setForm({...form, errorAdress: true});
    } else {
      dispatch(changeAdress(form.adress, form.city, userId));
      setModifyAdress(false);
      setForm({...form, errorAdress: false});
    }
  };
  
  return (
    <ScrollView>
      <View style={Style.container}>
        <Text style={{fontSize: 25, fontWeight: '700'}}>
          Impostazioni utente
        </Text>
        <View style={Style.box}>
          <Text style={Style.title}>
            Il tuo indirizzo di spedizione predefinito
          </Text>
          <View>
            <Text style={{marginStart: 20, marginBottom: 15}}>
              Città: {adress.city}
            </Text>
            <Text style={{marginStart: 20}}>Via/Piazza: {adress.adress}</Text>
          </View>
          {modifyAdress ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                style={Style.input}
                placeholder='Città'
                value={form.city}
                onChangeText={(text) => {
                  setForm({...form, city: text});
                }}
              />
              <TextInput
                style={Style.input}
                placeholder='Indirizzo'
                value={form.adress}
                onChangeText={(text) => {
                  setForm({...form, adress: text});
                }}
              />
              {form.errorAdress ? (
                <Text style={Style.error}>
                  Tutti i campi devono essere compilati
                </Text>
              ) : null}
              <CustomButton
                title='Conferma'
                onPress={() => {
                  changeAdressButton();
                }}
              />
            </View>
          ) : null}
          <CustomButton
            title={modifyAdress ? 'Annulla' : 'Cambia indirizzo'}
            onPress={() => {
              setModifyAdress(!modifyAdress);
              setForm({...form, errorAdress: false});
            }}
          />
        </View>
        <View style={Style.box}>
          <Text style={Style.title}>La tua carta predefinita</Text>
          <View>
            <Text style={{marginStart: 20, marginBottom: 15}}>
              Circuito : {card.card}
            </Text>
            <Text style={{marginStart: 20}}>
              Numero: {card.cardNumber.substr(12).padStart(16, '*')}
            </Text>
          </View>
          {modifyCard ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                style={Style.input}
                placeholder='Numero'
                value={form.cardNumber}
                onChangeText={(text) => {
                  setForm({...form, cardNumber: text});
                }}
              />
              <TextInput
                style={Style.input}
                placeholder='Circuito'
                value={form.card}
                onChangeText={(text) => {
                  setForm({...form, card: text});
                }}
              />
              {form.errorCard ? (
                <Text style={Style.error}>
                  Il numero deve contenere 16 caratteri senza spazi
                </Text>
              ) : null}
              <CustomButton
                title='Conferma'
                onPress={() => {
                  changeCardButton();
                }}
              />
            </View>
          ) : null}
          <CustomButton
            title={modifyCard ? 'Annulla' : 'Cambia carta'}
            onPress={() => {
              setModifyCard(!modifyCard);
              setForm({...form, errorCard: false});
            }}
          />
        </View>
        <CustomButton
          title='LogOut'
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '95%',
    margin: 'auto',
    borderWidth: 2,
    borderColor: colors.mainPurple,
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: colors.mainBlue,
  },
  error: {
    textAlign: 'center',
    color: colors.error,
    fontSize: 20,
    marginVertical: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
});

export default User;
