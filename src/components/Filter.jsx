import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';

export const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    console.log(e.currentTarget.value);
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <>
      <input type="text" value={filterValue} onChange={changeFilter} />
    </>
  );
};
