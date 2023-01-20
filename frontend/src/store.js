import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {programListReducer, programDetailReducer,
        programSearchDetailReducer} from './reducers/programReducers';
import {cartReducer} from './reducers/cartReducers';

const rootReducer = combineReducers({
  programList : programListReducer,
  programDetail : programDetailReducer,
  programSearchDetailReducer : programSearchDetailReducer,
  cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
                              ? JSON.parse (localStorage.getItem('cartItems')) : [];
const initialState = {
  cart : {cartItems: cartItemsFromStorage}
}
const store = configureStore({
  reducer : rootReducer,
  preloadedState : initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export default store;
