import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts.reducer';
import { FormStyle } from './Form.styled';
import { selectContacts } from 'redux/contacts/contacts.selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('contactsInForm: ', contacts);

  const createContact = formData => {
    if (contacts.some(contact => contact.name === formData.name)) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...formData,
    };
    console.log(newContact);
    dispatch(addContact(newContact));
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      name: name,
      number: number,
    };
    createContact(formData);
    setName('');
    setNumber('');
  };

  const handleInputChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <p>Phone</p>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="XXX-XX-XX"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyle>
    </div>
  );
};
