import Type from '../actionTypes';
import shortid from 'shortid';

export const addContactAction = ({ name, number }) => ({
  type: Type.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContactAction = id => ({
  type: Type.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const getContactsFromLS = savedContacts => ({
  type: Type.GET_CONTACTS_FROM_LS,
  payload: {
    savedContacts,
  },
});
