import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocalStorage } from 'redux/contactsSlice';

export const PhonebookPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');

    const parsedContacts = JSON.parse(contactsStorage);

    if (!parsedContacts) {
      return;
    }
    dispatch(updateLocalStorage(parsedContacts));
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <h2>Create contact</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Find by name</h2>
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
};
