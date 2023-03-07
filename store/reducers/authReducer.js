import { SIGN_UP, LOG_IN } from "../actions/AuthAction";

const initialState = {
  token: null,
  userdId: null,
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
        userdId: action.firebase.data.localId,
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
        userdId: action.firebase.data.localId,
        username: action.userDatas.data.username,
        cardNumber: action.userDatas.data.cardNumber,
        adressInfo: action.userDatas.data.adressInfo,
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default authUser;
