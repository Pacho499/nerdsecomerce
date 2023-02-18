import { ADD_ITEM } from "../actions/cartAction";
const initialState = {
    items: [],
    cost: 0 
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:{
      const cost = state.cost + action.payload.cost
      return {
        ...state,
        items: [...state.items, action.payload],
        cost: cost
      }
    }
      default:
        return {
          ...state,
        };
    }
  };
  
  export default cartReducer;