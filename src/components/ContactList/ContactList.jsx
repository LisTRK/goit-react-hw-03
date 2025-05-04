import { ImUser } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  const renderContacstList = contacts.map(({ id, name, number }) => (
    <li className={css.card} key={id}>
      <div className={css.cardData}>
        <h3>
          <ImUser />
          {name}
        </h3>
        <p>
          <AiFillPhone />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));

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
