import { useEffect, useState } from "react";
import data from "../json/data.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const localStorageGet = () => {
  const cont = window.localStorage.getItem("contacts");
  return cont !== null ? JSON.parse(cont) : data;
};

export default function App() {
  const [contacts, setContacts] = useState(localStorageGet);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (error) {
      console.error("not work contacts", error);
    }
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}
