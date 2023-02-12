import { combineReducers } from "redux";
import ItemSell from "./itemsSellReducer";
import authUser from "./authReducer";

const rootReducer = combineReducers({
    ItemSell,
    authUser
})

export default rootReducer