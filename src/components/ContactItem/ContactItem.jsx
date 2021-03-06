import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Stack, Modal} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleSharpIcon from '@mui/icons-material/ChangeCircleSharp';
import { Text } from "../ContactList/ContactsList.styled";
import { useDeleteContactMutation, useUpdateContactMutation } from "redux/contactsApi";
import { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { Ul, UpdBtn, DelBtn } from "components/ContactList/ContactsList.styled";
import { ModalBox } from "./ContactItem.styled";
import { UpdateContact, notifySucces } from "components";


export const ContactItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleting, setDeleting] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpd, setOpenUpd] = useState(false);
  
  const handleContactUpdate = (contact) => {
   const data = { ...contact, id };
    updateContact(data);
  };

   const showUpdModal = (e) => {
        setOpenUpd(!openUpd)
    };

 
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
            alt={name}
            src="/broken-image.jpg"
          >
          </Avatar>
        </Stack>
        <Text>
          {name}: {number}
        </Text>
    {deleting ? <Oval height="20" color="white" /> : <Ul>
      <li>
        <DelBtn
          id={id}
          type="button"
          onClick={handleOpen}
          startIcon={<DeleteIcon />}
        >Delete
        </DelBtn>
      </li>
      <li>
        <UpdBtn
          id={id}
          type="button"
          onClick={showUpdModal}
          startIcon={<ChangeCircleSharpIcon />}
        >Update
        </UpdBtn>
      </li>
    </Ul>}
    <Toaster />
    <Modal
        open={open}
        onClose={handleClose}>
              <ModalBox>
        <h2>Do you want to remove {name}?</h2>
          <Ul>
          <li><DelBtn type="button"
          onClick={handleClose}
          >No</DelBtn></li>
          <li><UpdBtn
            type="button"
            onClick={() => {
            handleDeleteContact(id)
          }}>Yes</UpdBtn></li>
          </Ul>
        </ModalBox>
    </Modal>
    
    <Modal
      open={openUpd}
      onClose={showUpdModal}
    >
      <ModalBox>
        <h2>Update {name}?</h2>
        <UpdateContact
          name={name}
          number={number}
          handClose={showUpdModal}
          onUpdate={handleContactUpdate}
        />
        </ModalBox>
      </Modal>
  </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

