import { Contact } from './Contact/Contact';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Contact item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
