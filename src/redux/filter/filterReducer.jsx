import Type from '../actionTypes';

const filterReducer = (filter = '', { type, payload }) => {
  switch (type) {
    case Type.FILTER_CONTACTS:
      return payload.filter;
    default:
      return filter;
  }
};

export default filterReducer;
