import { ContactsEditor } from '../ContactsEditor/ContactsEditor';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';
import { GlobalStyle } from '../GlobalStyle';
import { BookApp } from './App.styled';

export const App = () => {
  return (
    <BookApp>
      <ContactsEditor />
      <ContactsFilter />
      <ContactsList />
      <GlobalStyle />
    </BookApp>
  );
};
