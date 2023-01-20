import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {programListReducer, programDetailReducer,
        programSearchDetailReducer} from './reducers/programReducers';

const rootReducer = combineReducers({
  programList : programListReducer,
  programDetail : programDetailReducer,
  programSearchDetailReducer : programSearchDetailReducer
})

const store = configureStore({
  reducer : rootReducer,
  preloadedState : {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export default store;
