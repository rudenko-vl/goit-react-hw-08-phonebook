import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useNewContactsMutation, useGetContactsQuery } from "redux/contactsApi";
import { ContactForm, Filter, Title, Loader, notifyError, notifySucces, Footer, Header } from "components";

  const ContactsPage = () => {
  const [loading, setLoading] = useState(false);
  
  const [newContacts] = useNewContactsMutation();
  const { data } = useGetContactsQuery();
  const handleFormSubmit = async ({ name, number }) => {
    const arrayNames = data.map(item => item.name.toLowerCase());
    if (arrayNames.includes(name.toLowerCase())) {
      notifyError(`${name} is already in contacts.`);
      return;
    };
    setLoading(true);
    await newContacts({ name, number }).unwrap();
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
      <Filter contacts={data} />
      {loading && <Loader />}
          <Footer/>
      </>
  );
};

export default ContactsPage;