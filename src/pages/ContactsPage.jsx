import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
