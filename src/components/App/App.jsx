import './App.css';
import 'modern-normalize';
import { useState, useEffect, useMemo, useId } from 'react';
import { useDebounce } from 'use-debounce';
import ContactList from '../ContactList/ContactList';
import contactsData from '../Contact/Contact.json';
import SearchBox from '../SearchBox/SearchBox';
import ContactsForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('save-contacts')) ?? contactsData;
  });
  const [inputValue, setInputValue] = useState('');
  // const [valueForm, setValueForm] = useState();
  const [debounceValue] = useDebounce(inputValue, 400);

  const deleteContact = (contactId) => {
    setContacts((visibleContacts) =>
      visibleContacts.filter((contact) => contact.id !== contactId),
    );
  };

  const visibleContacts = useMemo(() => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(debounceValue.toLowerCase());
    });
  }, [debounceValue, contacts]);

  useEffect(() => {
    localStorage.setItem('save-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={formSubmit} />
      <SearchBox text={inputValue} onChangeInput={setInputValue} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </>
  );
}

export default App;

// {
//     "id": "id-1",
//    "name": "Rosie Simpson",
//     "number": "459-12-56"
// }
