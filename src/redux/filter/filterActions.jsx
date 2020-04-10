import Type from '../actionTypes';

export const filterContacts = value => {
  return {
    type: Type.FILTER_CONTACTS,
    payload: {
      filter: value,
    },
  };
};
