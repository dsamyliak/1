import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      createContact({
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Julie Samyliak" />
      <input type="text" name="number" placeholder="+38-012-123-45-67" />
      <button type="submit">Create</button>
    </form>
  );
};
