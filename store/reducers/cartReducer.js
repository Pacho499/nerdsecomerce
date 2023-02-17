import { ADD_ITEM } from "../actions/cartAction";
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:{
      console.log(action.payload)
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }
      default:
        return {
          ...state,
        };
    }
  };
  
  export default cartReducer;