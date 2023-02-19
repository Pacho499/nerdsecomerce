const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const FAST_ADD_ITEM = 'FAST_ADD_ITEM'
const FAST_REMOVE_ITEM = 'FAST_REMOVE_ITEM'

export const addItem = (item) => ({type: ADD_ITEM, payload: item});
export const removeItem = (item) => ({type:REMOVE_ITEM, payload:item})
export const fastAddItem = (id) => ({type:FAST_ADD_ITEM, payload:id})
export {ADD_ITEM, REMOVE_ITEM,FAST_ADD_ITEM};
