import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({
  contacts,
  searchedContacts,
  setContacts,
}) {
  const correctedContacts =
    searchedContacts.charAt(0).toUpperCase() +
    searchedContacts.slice(1).toLowerCase();
  const renderContacts = contacts.filter((contact) =>
    contact.name.includes(correctedContacts)
  );
  return (
    <ul className={css.list}>
      {renderContacts.map((contact) => (
        <Contact
          contact={contact}
          contacts={contacts}
          key={contact.id}
          setContacts={setContacts}
        />
      ))}
    </ul>
  );
}
