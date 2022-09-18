import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

export const PhonebookPage = () => {
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
