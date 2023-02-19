import {ADD_ITEM, REMOVE_ITEM} from '../actions/cartAction';
const initialState = {
  items: [],
  cost: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const cost = state.cost + action.payload.cost;
      return {
        ...state,
        items: [...state.items, action.payload],
        cost: cost,
      };
    }
    case REMOVE_ITEM: {
      return{
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        cost: state.cost - action.payload.cost
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
