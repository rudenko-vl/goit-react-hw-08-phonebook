import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNewContactsMutation, useGetContactsQuery } from "redux/contactsApi";
import { ContactForm, Filter, Title, Loader, notifyError, notifySucces, Footer, Header } from "components";

const ContactsPage = () => {

  const [newContacts] = useNewContactsMutation();
  const { data, isFetching, refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleFormSubmit = async ({ name, number }) => {
    const arrayNames = data.map(item => item.name.toLowerCase());
    if (arrayNames.includes(name.toLowerCase())) {
      notifyError(`${name} is already in contacts.`);
      return;
    };
    await newContacts({ name, number }).unwrap();
    setTimeout(() => {notifySucces(`${name} added to phonebook`)}, 1000);
  };
  return (
      <>
      <Header/>
      <Toaster/>
      <Title title="Phonebook" />
      <ContactForm onSubmit={handleFormSubmit} />
      <Title title="Contacts" />
      <Filter contacts={data} />
      {isFetching && <Loader />}
          <Footer/>
      </>
  );
};

export default ContactsPage;