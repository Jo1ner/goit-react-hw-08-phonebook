import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts.selectors';

export const ContactList = () => {
  const filterContacts = useSelector(selectVisibleContacts);

  // const getFindContact = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter);
  // });
  return (
    <ul>
      {filterContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
