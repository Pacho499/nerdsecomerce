import { FETCH_ITEMS } from "../actions/itemSellActions";
const initialState = {
  items: []
};

const ItemSell = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS: 
      return {
        ...state, 
        items : action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default ItemSell;