import {FETCH_ITEMS, FETCH_ITEMS_START} from '../actions/itemSellActions';
const initialState = {
  items: [],
  loading:false,
};

const ItemSell = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading:false
      };
    case FETCH_ITEMS_START:
      return{
        ...state,
        loading:true
      }
    default:
      return {
        ...state,
      };
  }
};

export default ItemSell;
