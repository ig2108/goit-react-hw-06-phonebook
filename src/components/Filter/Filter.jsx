import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as filterActions from '../../redux/filter/filterActions';
import { selectContacts, selectFilter } from '../../redux/selectors';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import slideTransition from '../../transitions/slideTransition.module.css';

const Filter = ({ contacts, filterValue = '', onChangeFilter }) => {
  const handleChangeFilter = e => {
    const { value } = e.target;
    onChangeFilter(value);
  };
  return (
    contacts.length > 1 && (
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames={slideTransition}
        unmountOnExit
      >
        <input
          type="text"
          value={filterValue}
          onChange={handleChangeFilter}
          className={styles.filterInput}
          placeholder="Type name to filter contacts..."
        ></input>
      </CSSTransition>
    )
  );
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

const mSTP = state => {
  return {
    contacts: selectContacts(state),
    filterValue: selectFilter(state),
  };
};

const mDTP = dispatch => {
  return {
    onChangeFilter: value => dispatch(filterActions.filterContacts(value)),
  };
};

export default connect(mSTP, mDTP)(Filter);
