import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleWare = compose(applyMiddleware(ReduxThunk), devTools);
const store = createStore(rootReducer, middleWare);

// const persistor = persistStore(store);

export { store };
