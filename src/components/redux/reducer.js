const contactsInitialState = {
  contacts: [],
};

export const contactsReduceer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
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

const filterInitialState = {
  filter: '',
};

export const filterReduceer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
