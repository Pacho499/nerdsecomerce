import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  RETRIEVE_DATA,
  CHANGE_ADRESS,
  CHANGE_CARD,
  ERROR,
  ERROR_REMOVE,
} from '../actions/AuthAction';

const initialState = {
  token: null,
  userId: null,
  username: '',
  cardData: {},
  adressInfo: {},
  error: false,
  errorMessage: '',
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
    case ERROR: {
      let errorMessage;
      console.log(action.payload.error.message);
      switch (action.payload.error.message) {
        case 'INVALID_EMAIL':
          errorMessage = 'E-mail Errata';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Password Errata';
          break;
        case 'EMAIL_EXISTS':
          errorMessage = 'Email Già presente';
          break;
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
          errorMessage = 'Password troppo corta. minimo 6 caratteri';
          break;
        default:
          errorMessage = 'Errore di connessione';
          break;
      }
      return {
        ...state,
        error: true,
        errorMessage: errorMessage,
      };
    }
    case ERROR_REMOVE: {
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default authUser;
