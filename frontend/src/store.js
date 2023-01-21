import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {programListReducer, programDetailReducer,
        programSearchDetailReducer} from './reducers/programReducers';
import {cartReducer} from './reducers/cartReducers';
import {loginReducer} from './reducers//userReducers'

const rootReducer = combineReducers({
  programList : programListReducer,
  programDetail : programDetailReducer,
  programSearchDetailReducer : programSearchDetailReducer,
  cart: cartReducer,
  userLogin: loginReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
                               JSON.parse (localStorage.getItem('cartItems')) : [];

const billingInfoFromStorage = localStorage.getItem('billingInfo') ?
                                JSON.parse(localStorage.getItem('billingInfo')) : [];

const paymentInfoFromstorage = localStorage.getItem('paymentInfo') ?
                    JSON.parse(localStorage.getItem('paymentInfo')) : [];

                          
const userInfoFromStorage = localStorage.getItem('userInfo') ?
                               JSON.parse(localStorage.getItem('userInfo')) : null;
                              
const initialState = {
  cart : {
    cartItems: cartItemsFromStorage,
    billingInfo: billingInfoFromStorage,
    paymentInfo: paymentInfoFromstorage
  },
  userLogin : {userInfo: userInfoFromStorage}
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
