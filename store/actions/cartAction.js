const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ALL = 'REMOVE_ALL'

export const addItem = (item) => ({type: ADD_ITEM, payload: item});
export const removeItem = (item) => ({type:REMOVE_ITEM, payload:item})
export const removeAll = () => ({type:REMOVE_ALL})
export {ADD_ITEM, REMOVE_ITEM, REMOVE_ALL};
