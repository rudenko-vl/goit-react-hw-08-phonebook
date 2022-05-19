import { List } from "./ContactsList.styled";
import { ContactItem, Title } from "components";
import { Item } from "./ContactsList.styled";

export const ContactsList = ({filteredContacts}) => {

  return (
    <>
      <h2>Total contacts - {filteredContacts.length}</h2>
      {filteredContacts.length > 0 ? (
        <List>
          {filteredContacts.map(contact => <Item key={contact.id}>
            {/* <ContactItem contact={contact}/> */}
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

