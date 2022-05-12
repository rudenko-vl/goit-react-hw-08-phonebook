import { List } from "./ContactsList.styled";
import { ContactItem, Title } from "components";
import { Item } from "./ContactsList.styled";

export const ContactsList = ({filteredContacts}) => {
 
  return (
    <>
      {filteredContacts.length > 0 ? (
        <List>
          {filteredContacts.map(contact => <Item key={contact.id}>
            <ContactItem contact={contact}/>
          </Item>)
          }
      </List>): <Title title="You don't have contacts yet. Add someone 🙂"/>}
      </>
  )
};

