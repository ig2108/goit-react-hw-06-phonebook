import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/contactForm/contactActions';
import { selectContacts } from '../../redux/selectors';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactListWrap';
import styles from './App.module.css';
import slideTitleTransition from '../../transitions/slideTitle.module.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const { onGetFromLS } = this.props;
    const contactsFromLS = localStorage.getItem('contacts');
    if (contactsFromLS) {
      onGetFromLS(JSON.parse(contactsFromLS));
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.props;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <CSSTransition
          in
          timeout={500}
          classNames={slideTitleTransition}
          appear
        >
          <h2 className={styles.sectionTitle}>Phonebook</h2>
        </CSSTransition>
        <ContactForm />
        <h2 className={styles.sectionTitle}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

const mSTP = state => {
  return {
    contacts: selectContacts(state),
  };
};

const mDTP = dispatch => {
  return {
    onGetFromLS: savedContacts => {
      dispatch(contactActions.getContactsFromLS(savedContacts));
    },
  };
};

export default connect(mSTP, mDTP)(App);

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onGetFromLS: PropTypes.func,
};
