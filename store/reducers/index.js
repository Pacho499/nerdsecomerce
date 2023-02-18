import {combineReducers} from 'redux';
import ItemSell from './itemsSellReducer';
import authUser from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  ItemSell,
  authUser,
  cartReducer,
});

export default rootReducer;
