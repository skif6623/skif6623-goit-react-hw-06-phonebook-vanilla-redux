import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/actions';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsItem key={id}>
            <ContactName>
              {name}: <ContactNumber>{number}</ContactNumber>
            </ContactName>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactsItem>
        );
      })}
    </ul>
  );
};
