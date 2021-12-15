import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({ 
    cart: cartReducer, 
    directory: directoryReducer, 
}); 