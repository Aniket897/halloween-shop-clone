import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cart';
import appReducer from './Slices/app';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["app"]
}


const reducers = combineReducers({
    cart: cartReducer,
    app: appReducer
});


const persistedReducers = persistReducer(persistConfig, reducers);




const store = configureStore({
    reducer: persistedReducers
});


export default store;