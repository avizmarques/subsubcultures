import { combineReducers } from "redux";
import { gamesReducer as gameSearches } from "./games/gamesReducer";
import { cartReducer as cart } from "./cart/cartReducer";

export default combineReducers({ gameSearches, cart });
