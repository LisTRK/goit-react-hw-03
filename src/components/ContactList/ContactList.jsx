import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  const renderContacstList = contacts.map((contact) => {
    return (
      <li key={contact.id} className={css.card}>
        <Contact contact={contact} onDeleteContact={onDeleteContact} />
        <p>{contact.id}</p>
      </li>
    );
  });
  return (
    <ul className={css.list}>
      {renderContacstList.length !== 0 ? (
        renderContacstList
      ) : (
        <p className={css.empty}>Phonebook is empty</p>
      )}
    </ul>
  );
}
