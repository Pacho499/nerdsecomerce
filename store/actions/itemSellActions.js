import axios from 'axios'
import Item from '../../models/itemSell'
const FETCH_ITEMS = 'FETCH_ITEMS'

export const fetchItems = () => {
    return async dispatch => {
        const data = await axios.get('https://nerdsecomerce-default-rtdb.firebaseio.com/itemSell.json')
        const itemSell = []
        const items = data.data
        for (const key in items){
            itemSell.push(
                new Item(
                    items[key]['id'],
                    items[key]['image'],
                    items[key]['title'],
                    items[key]['type'],
                    items[key]['cost'],
                    items[key]['franchise']
                )
            )
        }
        console.log(itemSell)
        dispatch({type: FETCH_ITEMS, payload: itemSell})
    }
}

export {FETCH_ITEMS}
