import { useDispatch } from 'react-redux';
import { FilterStyle } from './Filter.styled';
import { addContactsFilter } from 'redux/contacts/contacts.reducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputFilterChange = evt => {
    const filterValue = evt.target.value;
    dispatch(addContactsFilter(filterValue));
  };
  return (
    <FilterStyle>
      <h2>Find contacts by name</h2>
      <input type="text" onChange={handleInputFilterChange} />
    </FilterStyle>
  );
};
