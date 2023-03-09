import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const RETRIEVE_DATA = 'RETRIEVE_DATA';
const CHANGE_ADRESS = 'CHANGE_ADRESS';
const CHANGE_CARD = 'CHANGE_CARD';
const ERROR = 'ERROR';
const ERROR_REMOVE = 'ERROR_REMOVE';

export const signUp = (formDatas) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP82z2GcEbeoKBldyEELw2UaBHcpUqZ6U`,
        {
          email: formDatas.email,
          password: formDatas.password,
          returnSecureToken: true,
        },
      );
      await axios.put(
        `https://nerdsecomerce-default-rtdb.firebaseio.com/users/${data.data.localId}.json`,
        {
          email: data.data.email,
          username: formDatas.name,
          adressInfo: {
            city: formDatas.city,
            adress: formDatas.adress,
          },
          cardData: {
            cardNumber: formDatas.cardNumber,
            card: formDatas.card,
          },
        },
      );
      dispatch({type: SIGN_UP, firebase: data, form: formDatas});
      saveData(data.data.idToken, data.data.localId);
    } catch (error) {
      dispatch({type: ERROR, payload: error.response.data});
    }
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP82z2GcEbeoKBldyEELw2UaBHcpUqZ6U`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        },
      );
      const userDatas = await axios.get(
        `https://nerdsecomerce-default-rtdb.firebaseio.com/users/${data.data.localId}.json`,
      );
      dispatch({type: LOG_IN, firebase: data, userDatas: userDatas.data});
      saveData(data.data.idToken, data.data.localId);
    } catch (error) {
      dispatch({type: ERROR, payload: error.response.data});
    }
  };
};

export const logout = () => {
  deleteData();
  return {type: LOG_OUT};
};

const deleteData = () => {
  AsyncStorage.removeItem('userData');
};

const saveData = (token, userId) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
    }),
  );
};

export const retrieveData = () => {
  return async (dispatch) => {
    const data = await AsyncStorage.getItem('userData');
    const myData = JSON.parse(data);
    let userDatas = {};
    if (data !== null) {
      userDatas = await axios.get(
        `https://nerdsecomerce-default-rtdb.firebaseio.com/users/${myData.userId}.json`,
      );
      dispatch({
        type: RETRIEVE_DATA,
        userDatas: userDatas.data,
        firebase: myData,
      });
    }
  };
};

export const changeAdress = (adress, city, userId) => {
  return async (dispatch) => {
    await axios.put(
      `https://nerdsecomerce-default-rtdb.firebaseio.com/users/${userId}/adressInfo.json`,
      {
        adress: adress,
        city: city,
      },
    );
    dispatch({type: CHANGE_ADRESS, adress: adress, city: city});
  };
};
export const changeCard = (cardNumber, card, userId) => {
  return async (dispatch) => {
    await axios.put(
      `https://nerdsecomerce-default-rtdb.firebaseio.com/users/${userId}/cardData.json`,
      {
        cardNumber: cardNumber,
        card: card,
      },
    );
    dispatch({type: CHANGE_CARD, cardNumber: cardNumber, card: card});
  };
};

export const removeError = () => ({type: ERROR_REMOVE});

export {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  RETRIEVE_DATA,
  CHANGE_ADRESS,
  CHANGE_CARD,
  ERROR,
  ERROR_REMOVE,
};
