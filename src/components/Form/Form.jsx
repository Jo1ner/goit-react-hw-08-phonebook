import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts.reducer';
import { FormStyle } from './Form.styled';
import { selectContacts } from 'redux/contacts/contacts.selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const createContact = evt => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.contactName.value;
    const number = evt.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    if (contacts.some(contact => contact.name === formData.name)) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    dispatch(addContact(formData))
      .unwrap()
      .then(() => evt.target.reset());
  };

  return (
    <div>
      <FormStyle onSubmit={createContact}>
        <h2 className="title">Add new contact</h2>
        <label>
          <p className="text">Name</p>
          <input className="input" type="text" name="contactName" required />
        </label>
        <label>
          <p className="text">Phone</p>
          <input
            className="input"
            type="text"
            name="contactNumber"
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
