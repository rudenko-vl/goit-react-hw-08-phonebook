import { List } from "./ContactsList.styled";
import { ContactItem, Title } from "components";
import { Item } from "./ContactsList.styled";
// import { SortBtn, Div } from "./ContactsList.styled";

export const ContactsList = ({ filteredContacts }) => {
  
  const sortedContacts = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
    
  return (
    <>
      {sortedContacts.length > 0 ? (
        <List>
          {sortedContacts.map(contact => <Item key={contact.id}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </Item>)
          }
      </List>): <Title title="You don't have contacts yet. Add someone 🙂"/>}
      </>
  )
};

