import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/contactForm/contactActions';
import { selectContacts } from '../../redux/selectors';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ContactForm.module.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkIsInputCorrect = (name, number) => {
    const isNumber = Boolean(Number(number));
    const { onAddContact } = this.props;
    console.log(isNumber);
    console.log(name !== '');
    if (isNumber && name !== '') {
      onAddContact({ ...this.state });
    } else if (!isNumber && name === '') {
      NotificationManager.error(
        'Please, enter name or number',
        `Some registration point are empty`,
        5000,
      );
    } else if (!isNumber) {
      NotificationManager.error(
        'Please, enter a correct number',
        'Number is not valid',
        5000,
      );
    } else if (name === '') {
      NotificationManager.error('Please, enter a name', 'Name is empty', 5000);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.props;
    const { name, number } = this.state;
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      NotificationManager.error(
        'Please, enter another name',
        `${name} is already in contacts`,
        5000,
      );
    } else {
      this.checkIsInputCorrect(name, number);
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <NotificationContainer />
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.labelItem} htmlFor={this.nameInputId}>
            <p className={styles.textName}>Name</p>
            <input
              className={styles.inputName}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label className={styles.labelItem} htmlFor={this.numberInputId}>
            <p className={styles.textName}>Number</p>
            <input
              type="phone"
              name="number"
              value={number}
              onChange={this.handleChange}
              id={this.numberInputId}
            />
          </label>
          <button className={styles.submitBtn} type="submit">
            Add Contact
          </button>
        </form>
      </>
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
    onAddContact: ({ name, number }) =>
      dispatch(contactActions.addContactAction({ name, number })),
  };
};

export default connect(mSTP, mDTP)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
};
