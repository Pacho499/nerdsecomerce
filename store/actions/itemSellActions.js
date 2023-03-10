import axios from 'axios';
import Item from '../../models/itemSell';
const FETCH_ITEMS = 'FETCH_ITEMS';
const FETCH_ITEMS_START = 'FETCH_ITEMS_START'
export const fetchItems = () => {
  return async (dispatch) => {
    dispatch({type:FETCH_ITEMS_START})
    try {
      const data = await axios.get(
      'https://nerdsecomerce-default-rtdb.firebaseio.com/itemSell.json',
    );
    const itemSell = [];
    const items = data.data;
    for (const key in items) {
      itemSell.push(
        new Item(
          items[key]['id'],
          items[key]['image'],
          items[key]['title'],
          items[key]['type'],
          items[key]['cost'],
          items[key]['franchise'],
        ),
      );
    }
    dispatch({type: FETCH_ITEMS, payload: itemSell});
    } catch (error) {
      console.log(error)
    }
    
  };
};

export {FETCH_ITEMS, FETCH_ITEMS_START};
