import React, {useEffect, useState} from 'react';
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
const BuyNowModal = (props) => {
  const token = useSelector((state) => state.authUser.token);
  const [formState, setFormState] = useState({
    adress: '',
    creditCart: '',
    CVV: '',
    city: '',
    buyed: false,
  });
  const [readyToBuy, setReadyToBuy] = useState(false);
  const [standardUserData, setStandardUserData] = useState(true);

  useEffect(() => {
    if (formState.CVV.length === 3 && formState.creditCart.length === 16) {
      setReadyToBuy(true);
    } else {
      setReadyToBuy(false);
    }
  }, [formState]);

  const buyed = () => {
    setFormState({...formState, buyed: true});
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
    }, 3000);
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
      {formState.buyed ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'white',
          }}
        >
          <Text>Acquisto effettuato correttamente</Text>
        </View>
      ) : (
        <ScrollView>
          <TouchableOpacity onPress={props.onClose}>
            <View style={Styles.close}></View>
          </TouchableOpacity>
          <View style={Styles.modal}>
            {token && standardUserData ? (
              <UserDataReview
                buyed={buyed}
                changeData={() => {
                  setStandardUserData(false);
                }}
              />
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
                    value={formState.creditCart}
                    onChangeText={(text) => {
                      setFormState({...formState, creditCart: text});
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
    marginTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
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
});

export default BuyNowModal;
