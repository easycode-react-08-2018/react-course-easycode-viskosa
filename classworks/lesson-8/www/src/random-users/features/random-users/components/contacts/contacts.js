import React, {Component} from 'react';

import {SearchBar} from '../search-bar';
import {ContactList} from '../contacts-list';
import {filterUsers} from '../../actions/filter-users';
import {selectFilterText} from '../../selectors/select-filter-text';
import {selectFilteredUsers} from '../../selectors/select-filtered-users'; // для оптимизации,
// мы хотим пользователей фильтровать не в рендере, а еще в редьюсере, потому что users лежат в редьюсере

import './contacts.css';
import {connect} from 'react-redux';

export class ContactsComponent extends Component {
  render() {
    const {
      filterText,
      filterUsers,
      contacts,
      filteredContacts
    } = this.props;

    return (
      <div className="contactApp">
        <SearchBar filterText={filterText}
                   onUserInput={filterUsers}/>
        <ContactList contacts={filteredContacts}
                     filterText={filterText}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterText: selectFilterText(state),
    filteredContacts: selectFilteredUsers(state),
  };
};

export const Contacts = connect(mapStateToProps, {
  filterUsers,
})(ContactsComponent);