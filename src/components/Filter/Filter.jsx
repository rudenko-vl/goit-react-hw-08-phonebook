import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ContactsList } from "components";
import { inputСhange } from "redux/filter/action";
import { getFilter } from "redux/filter/selectors";
import { useSelector } from "react-redux";

export const Filter = ({contacts}) => {
  
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const changeFilter = ({ target: { value } }) => dispatch(inputСhange(value));
  const filteredContacts = contacts?.length > 0
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.trim().toLowerCase()),
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
        value={value}
        onChange={changeFilter}
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
