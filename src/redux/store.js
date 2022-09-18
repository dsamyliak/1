import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { myValueSlice } from './myValue/slice';
import { itemsSlice } from './items/slice';
import { userSlice } from './userSlice';
import { contactsSlice } from './contactsSlice';

//Store
export const store = configureStore({
  reducer: {
    // myValue: myReducer,
    myValue: myValueSlice.reducer,
    // items: itemsReducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    contacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
