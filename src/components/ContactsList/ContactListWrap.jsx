import { connect } from 'react-redux';
import * as contactActions from '../../redux/contactForm/contactActions';
import { selectContacts, selectFilter } from '../../redux/selectors';
import ContactsList from './ContactsList';

const mSTP = state => {
  return {
    contacts: selectContacts(state).filter(contact =>
      contact.name.toLowerCase().includes(selectFilter(state).toLowerCase()),
    ),
    filter: selectFilter(state),
  };
};

const mDTP = dispatch => {
  return {
    onDeleteContact: id => dispatch(contactActions.deleteContactAction(id)),
  };
};

export default connect(mSTP, mDTP)(ContactsList);
