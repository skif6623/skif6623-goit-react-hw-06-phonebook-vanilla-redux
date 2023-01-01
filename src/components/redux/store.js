// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { contactsReduceer, filterReduceer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReduceer,
    filter: filterReduceer,
  },
});
