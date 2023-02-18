//import {SIGNIN, SIGNUP, RETRIEVE_DATA, LOGOUT} from '../action/authUser';

const initialState = {
  token: null,
  userdId: null,
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default authUser;
