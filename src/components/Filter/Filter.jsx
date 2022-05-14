import { useState } from "react";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ContactsList } from "components";

export const Filter = ({ contacts }) => {
  const [filter, setFilter] = useState('');
  const filteredContacts = contacts?.length > 0
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
      )
    : [];
  
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      type="text"
        name='filter'
        placeholder="Contact's name"
        value={filter}
        onChange={ev => setFilter(ev.target.value)}
    >
        <TextField id="filled-basic" label="Contact's name" variant="filled" color="success" sx={{ backgroundColor: "white", borderRadius: "5px" }}/>
      </Box>
      <ContactsList filteredContacts={filteredContacts}/>
      </>
  );
  
};

Filter.propTypes = {
 contacts: PropTypes.array,
};
