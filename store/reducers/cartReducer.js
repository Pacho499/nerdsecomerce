import { ADD_ITEM } from "../actions/cartAction";
const initialState = {
    items: [],
    cost: 0, 
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:{
      console.log(action.payload)
      return {
        item: [...state.items, action.payload],
        cost: state.cost + action.payload.cost,
        ...state
      }
    }
      default:
        return {
          ...state,
        };
    }
  };
  
  export default cartReducer;