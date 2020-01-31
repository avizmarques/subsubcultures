import { combineReducers } from "redux";
import { gamesReducer as games } from "./games/gamesReducer";
import { cartReducer as cart } from "./cart/cartReducer";

export default combineReducers({ games, cart });
