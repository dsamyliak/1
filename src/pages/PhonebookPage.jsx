import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
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
        <ContactForm />
      </div>
      <div>
        <ContactList />
      </div>
    </>
  );
};
