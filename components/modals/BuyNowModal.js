import React, {useEffect, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import CustomButton from '../CustomButton';
import {useSelector} from 'react-redux';
import UserDataReview from '../UserDataReview';
import {colors} from '../../utils/colors';
import TransitionDone from '../TransitionDone';
import TransitionError from '../TransitionError';
const BuyNowModal = (props) => {
  const token = useSelector((state) => state.authUser.token);
  const [formState, setFormState] = useState({
    adress: '',
    cardNumber: '',
    CVV: '',
    city: '',
    card: '',
    buyed: false,
    error: false,
  });
  const [readyToBuy, setReadyToBuy] = useState(false);
  const [standardUserData, setStandardUserData] = useState(true);

  useEffect(() => {
    if (formState.CVV.length === 3 && formState.cardNumber.length === 16) {
      setReadyToBuy(true);
    } else {
      setReadyToBuy(false);
    }
  }, [formState]);

  const buyed = () => {
    if (formState.CVV.length !== 3) {
      setFormState({...formState, buyed: true, error: true});
      setTimeout(() => {
        props.navigation.navigate('Home');
      }, 3000);
    } else {
      setFormState({...formState, buyed: true, error: false});
      setTimeout(() => {
        setFormState({
          ...formState,
          city: '',
          adress: '',
          creditCart: '',
          CVV: '',
          buyed: false,
        });
        props.navigation.navigate('Home');
      }, 4000);
    }
  };

  const goToLogIn = () => {
    props.navigation.navigate('user');
    props.onClose();
  };

  return (
    <Modal
      transparent
      onRequestClose={props.onClose}
      animationType='slide'
      visible={props.visible}
    >
      {formState.error ? (
        <View style={Styles.transitionContainer}>
          <TransitionError />
        </View>
      ) : formState.buyed ? (
        <View style={Styles.transitionContainer}>
          <TransitionDone />
        </View>
      ) : (
        <ScrollView>
          <TouchableOpacity onPress={props.onClose}>
            <View style={Styles.close}></View>
          </TouchableOpacity>
          <View style={Styles.modal}>
            {token && standardUserData ? (
              <View style={{alignItems: 'center'}}>
                <UserDataReview
                  buyed={buyed}
                  changeData={() => {
                    setStandardUserData(false);
                  }}
                />
                <TextInput
                  placeholder='CVV (3 numeri)'
                  style={Styles.input}
                  value={formState.CVV}
                  onChangeText={(text) => {
                    setFormState({...formState, CVV: text});
                  }}
                />
                <CustomButton title='Compra' onPress={buyed} />
              </View>
            ) : (
              <>
                <View style={Styles.formContainer}>
                  <TextInput
                    placeholder='Città'
                    style={Styles.input}
                    value={formState.city}
                    onChangeText={(text) => {
                      setFormState({...formState, city: text});
                    }}
                  />
                  <TextInput
                    placeholder='Indirizzo'
                    style={Styles.input}
                    value={formState.adress}
                    onChangeText={(text) => {
                      setFormState({...formState, adress: text});
                    }}
                  />
                  <TextInput
                    placeholder='Numero carta di credito (16 numeri)'
                    style={Styles.input}
                    value={formState.cardNumber}
                    onChangeText={(text) => {
                      setFormState({...formState, cardNumber: text});
                    }}
                  />
                  <TextInput
                    placeholder='Circuito'
                    style={Styles.input}
                    value={formState.card}
                    onChangeText={(text) => {
                      setFormState({...formState, card: text});
                    }}
                  />
                  <TextInput
                    placeholder='CVV (3 numeri)'
                    style={Styles.input}
                    value={formState.CVV}
                    onChangeText={(text) => {
                      setFormState({...formState, CVV: text});
                    }}
                  />
                  {readyToBuy ? (
                    <CustomButton title='Compra' onPress={buyed} />
                  ) : (
                    <CustomButton title='compila i campi' />
                  )}
                </View>
                <View style={Styles.container}>
                  {token ? (
                    <CustomButton
                      title='Utilizza i dati salvati'
                      onPress={() => {
                        setStandardUserData(true);
                      }}
                    />
                  ) : (
                    <>
                      <Text>
                        Effettua l'accesso per rendere l'operazione più veloce
                      </Text>
                      <CustomButton title='Chiudi' onPress={props.onClose} />
                      <CustomButton title='Accedi' onPress={goToLogIn} />
                    </>
                  )}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </Modal>
  );
};

const Styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginTop: 28,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: colors.mainPurple,
  },
  close: {
    height: 350,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modal: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  boxUser: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  transitionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default BuyNowModal;
