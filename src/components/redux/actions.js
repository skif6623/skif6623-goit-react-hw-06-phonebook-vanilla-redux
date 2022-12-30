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
