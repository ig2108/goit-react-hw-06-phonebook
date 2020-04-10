import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactListWrap';
import styles from './App.module.css';
import slideTitleTransition from '../../transitions/slideTitle.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <CSSTransition in timeout={500} classNames={slideTitleTransition} appear>
        <h2 className={styles.sectionTitle}>Phonebook</h2>
      </CSSTransition>
      <ContactForm />
      <h2 className={styles.sectionTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
