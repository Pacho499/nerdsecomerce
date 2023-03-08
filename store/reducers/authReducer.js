import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  RETRIEVE_DATA,
  CHANGE_ADRESS,
  CHANGE_CARD,
} from '../actions/AuthAction';

const initialState = {
  token: null,
  userId: null,
  username: '',
  cardData: {},
  adressInfo: {},
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      return {
        ...state,
        token: action.firebase.data.idToken,
        userId: action.firebase.data.localId,
        username: action.form.name,
        cardData: {
          cardNumber: action.form.cardNumber,
          card: action.form.card,
        },
        adressInfo: {
          city: action.form.city,
          adress: action.form.adress,
        },
      };
    }
    case LOG_IN: {
      return {
        ...state,
        token: action.firebase.data.idToken,
        userId: action.firebase.data.localId,
        username: action.userDatas.username,
        cardData: action.userDatas.cardData,
        adressInfo: action.userDatas.adressInfo,
      };
    }
    case LOG_OUT: {
      return {
        initialState,
      };
    }
    case CHANGE_ADRESS: {
      return {
        ...state,
        adressInfo: {
          city: action.city,
          adress: action.adress,
        },
      };
    }
    case CHANGE_CARD: {
      return {
        ...state,
        cardData: {
          cardNumber: action.cardNumber,
          card: action.card,
        },
      };
    }
    case RETRIEVE_DATA: {
      return {
        token: action.firebase.token,
        userId: action.firebase.userId,
        username: action.userDatas.username,
        cardData: action.userDatas.cardData,
        adressInfo: action.userDatas.adressInfo,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default authUser;
