import {ADD_ITEM, REMOVE_ITEM, FAST_ADD_ITEM} from '../actions/cartAction';
const initialState = {
  items: {},
  cost: 0,
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const cost = state.cost + action.payload.cost;
      let items = state.items
      //if the cart hasn't the item it will be add to cart
      if (!items.hasOwnProperty(action.payload.id)){
        items[action.payload.id] = {
          quantity : 1,
          item: action.payload
        }
      //if the cart have the item it will be increase the quantity
      }else {
        items[action.payload.id]['quantity'] = items[action.payload.id]['quantity'] + 1
      }
      
      return {
        ...state,
        items: items,
        cost: cost,
      };
    }
    case REMOVE_ITEM: {
      const items = state.items
      const quantity = state.items[action.payload.id]['quantity']
      delete state.items[action.payload.id]
      return{
        ...state,
        items: items,
        cost: Math.round((state.cost - (action.payload.cost * quantity))  * 100) / 100
      }
    }
    case FAST_ADD_ITEM:{
      const items = state.items
      items[action.payload]['quantity'] = items[action.payload]['quantity'] + 1
      console.log(items) 
      return{
        ...state,
        items: items
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;

// items : {
//   id: {
//     item : []
//     number: number 
//   }
// }
