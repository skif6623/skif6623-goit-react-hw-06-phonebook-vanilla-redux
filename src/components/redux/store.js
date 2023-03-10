import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const contactsIntoBook = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const initContactsFromStorage = () => {
//   const savedStorageContacts = localStorage.getItem('contacts');
//   if (savedStorageContacts !== null) {
//     return JSON.parse(savedStorageContacts);
//   }
//   return contactsIntoBook;
// };

// const initialState = {
//   contacts: initContactsFromStorage(),
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };

//     case 'filter/changeFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [action.payload, ...state.contacts],
//       };

//     default:
//       return state;
//   }
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
