const contactsInitialState = {
  contacts: [],
};

export const contactsReduceer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContact':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'contacts/addContact':
      return {
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
        filter: action.payload,
      };

    default:
      return state;
  }
};
