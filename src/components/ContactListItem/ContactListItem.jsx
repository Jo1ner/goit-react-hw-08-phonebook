import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.reducer';
import { ContactItem, ButtonDelete } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactItem>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <ButtonDelete
        type="button"
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
