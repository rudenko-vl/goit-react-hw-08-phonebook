import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Stack, Modal} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleSharpIcon from '@mui/icons-material/ChangeCircleSharp';
import { Text } from "../ContactList/ContactsList.styled";
import { useDeleteContactMutation } from "redux/contactsApi";
import { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { notifySucces } from "../Notify/Notify";
import { Ul, UpdBtn, DelBtn } from "components/ContactList/ContactsList.styled";
import { ModalBox } from "./ContactItem.styled";


export const ContactItem = ({contact}) => {
  const [deleteContact] = useDeleteContactMutation();
  const [deleting, setDeleting] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
    {deleting ? <Oval height="20" color="white" /> : <Ul>
      <li>
        <DelBtn
          id={contact.id}
          type="button"
          onClick={handleOpen}
          startIcon={<DeleteIcon />}
        >Delete
        </DelBtn>
      </li>
      <li>
        <UpdBtn
          id={contact.id}
          type="button"
          // onClick={}
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
                  <h2>Delete this contact?</h2>
          <Ul>
          <li><DelBtn type="button"
          onClick={handleClose}
          >No</DelBtn></li>
          <li><UpdBtn
            type="button"
            onClick={() => {
            handleDeleteContact(contact.id)
          }}>Yes</UpdBtn></li>
          </Ul>
        </ModalBox>
      </Modal>
  </>
  );
};

ContactItem.propTypes = {
 contact: PropTypes.object,
};

