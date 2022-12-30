import { nanoid } from 'nanoid';

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};
