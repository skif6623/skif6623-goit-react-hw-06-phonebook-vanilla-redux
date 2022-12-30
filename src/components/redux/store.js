import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initContactsFromStorage = () => {
  const savedStorageContacts = localStorage.getItem('contacts');
  if (savedStorageContacts !== null) {
    return JSON.parse(savedStorageContacts);
  }
  return [];
};

const initialState = {
  contacts: initContactsFromStorage(),
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'filter/changeFilter':
      return {
        ...state,
        filter: action.payload,
      };

    case 'contacts/addContact':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
