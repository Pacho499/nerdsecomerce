import { SIGN_UP, LOG_IN, LOG_OUT, RETRIEVE_DATA } from "../actions/AuthAction";

const initialState = {
  token: null,
  userId: null,
  username:'',
  cardNumber:'',
  adressInfo:{}
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:{
      console.log(action)
      return{
        ...state,
        token: action.firebase.data.idToken,
        userId: action.firebase.data.localId,
        username: action.form.name,
        cardNumber: action.form.card,
        adressInfo:{
          city: action.form.city,
          adress: action.form.adress
        }
      }
    }
    case LOG_IN:{
      return{
        ...state,
        token: action.firebase.data.idToken,
        userId: action.firebase.data.localId,
        username: action.userDatas.username,
        cardNumber: action.userDatas.cardNumber,
        adressInfo: action.userDatas.adressInfo,
      }
    }
    case LOG_OUT:{
      return{
        initialState
      }
    }
    case RETRIEVE_DATA:{
      console.log(action)
      return{
          token: action.firebase.token,
          userId: action.firebase.userId,
          username: action.userDatas.username,
          cardNumber: action.userDatas.cardNumber,
          adressInfo:action.userDatas.adressInfo,
      }
  }
    default:
      return {
        ...state,
      };
  }
};

export default authUser;
