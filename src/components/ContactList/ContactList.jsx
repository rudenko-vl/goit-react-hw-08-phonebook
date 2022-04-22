import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from "prop-types";
import { Item, List, Error, Text } from "./ContactsList.styled";
import { useDeleteContactMutation, useGetContactsQuery } from "redux/contactsApi";
import { Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";
import { notifySucces } from "../Notify/Notify";

export const ContactsList = ({ filter }) => {
  const [loading, setLoading] = useState(false);
  const {data = [], isLoading, isError} = useGetContactsQuery(filter);
  const [deleteContact] = useDeleteContactMutation();
  const handleDeleteContact = async (id) => {
    setLoading(true);
    await deleteContact(id).unwrap();
    setLoading(false);
  }
  if (loading || isLoading) return <Loader/>
  if (isError) return <Error>Sorry, server error!</Error>
  if (data.length === 0) return <h2>You don't have contacts yet. Add someone 🙂</h2>
  
  return (
    <List>
      {data.map((contact) => (
        <Item key={contact.id}>
          <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[400] }}
        alt={contact.name}
        src="/broken-image.jpg"
      >
      </Avatar>
    </Stack>
          <Text>
            {contact.name}: {contact.phone}
          </Text>
          <Button
            id={contact.id}
            type="button"
            onClick={() => {
              handleDeleteContact(contact.id)
              notifySucces(`${contact.name} removed from phonebook`)
            }}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Item>
      ))}
      <Toaster/>
    </List>
  );
};

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
};

