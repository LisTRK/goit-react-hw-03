import { ImUser } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import css from './Contact.module.css';

export default function Contact({ contact, onDeleteContact }) {
  return (
    <>
      <div className={css.cardData}>
        <h3>
          <ImUser />
          {contact.name}
        </h3>
        <p>
          <AiFillPhone />
          {contact.number}
        </p>
      </div>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </>
  );
}
