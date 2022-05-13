import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Text } from "../ContactList/ContactsList.styled";
import { useDeleteContactMutation } from "redux/contactsApi";
import { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { notifySucces } from "../Notify/Notify";


export const ContactItem = ({contact}) => {
  const [deleteContact] = useDeleteContactMutation();
  const [deleting, setDeleting] = useState(false);
  
  const handleDeleteContact = async (id) => {
    setDeleting(true);
    await deleteContact(id).unwrap();
    setTimeout(() => {notifySucces("Contact removed from phonebook")}, 1000)
    setDeleting(false);
  }
  
  return (<>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ bgcolor: deepOrange[400] }}
            alt={contact.name}
            src="/broken-image.jpg"
          >
          </Avatar>
        </Stack>
        <Text>
          {contact.name}: {contact.number}
        </Text>
        {deleting ? <Oval height="20" color="white" /> : <Button
          id={contact.id}
          type="button"
          onClick={() => {
            handleDeleteContact(contact.id)
          }}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >Delete
        </Button>}
    <Toaster />
  </>
  );
};

ContactItem.propTypes = {
 contact: PropTypes.object,
};