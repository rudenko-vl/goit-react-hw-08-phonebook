import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useNewContactsMutation, useGetContactsQuery } from "redux/contactsApi";
import { ContactForm, ContactsList, Filter, Title, Loader, notifyError, notifySucces, Footer, Header } from "components";

  const ContactsPage = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [newContacts] = useNewContactsMutation();
  const { data } = useGetContactsQuery();
  const handleFormSubmit = async ({ name, phone }) => {
    const arrayNames = data.map(item => item.name.toLowerCase());
    if (arrayNames.includes(name.toLowerCase())) {
      notifyError(`${name} is already in contacts.`);
      return;
    };
    setLoading(true);
    await newContacts({ name, phone }).unwrap();
    notifySucces(`${name} added to phonebook`)
    setLoading(false);
  };
  return (
      <>
      <Header/>
      <Toaster/>
      <Title title="Phonebook" />
      <ContactForm onSubmit={handleFormSubmit} />
      <Title title="Contacts" />
      <Filter onChangeFilter={ev => setFilter(ev.target.value)} filter={filter} />
      {loading && <Loader />}
          <ContactsList filter={filter} />
          <Footer/>
      </>
  );
};

export default ContactsPage;