import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const filterContacts = useSelector(selectVisibleContacts);

  return (
    <StyledContactList>
      {filterContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </StyledContactList>
  );
};
