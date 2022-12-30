import { ContactsEditor } from '../ContactsEditor/ContactsEditor';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';
import { GlobalStyle } from '../GlobalStyle';
import { BookApp } from './App.styled';

// const contactsIntoBook = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
// const getContactsFromStorage = () => {
//   const savedStorageContacts = localStorage.getItem('contacts');
//   if (savedStorageContacts !== null) {
//     return JSON.parse(savedStorageContacts);
//   }
//   return contactsIntoBook;
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getContactsFromStorage());
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <BookApp>
      <ContactsEditor />
      <ContactsFilter />
      <ContactsList />
      <GlobalStyle />
    </BookApp>
  );
};
