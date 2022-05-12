import { useState, Fragment } from 'react';
import {Box, Drawer, List, ListItem, ListItemText, Avatar, Stack, Button } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import './UserMenu.css';
import { deepPurple } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { notifySucces } from 'components';

export const UserMenu = () => {
    const [state, setState] = useState({
        right: false,
    });
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const email = useSelector(getUserEmail);
   
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    

    const list = (anchor) => (
        <Box
            sx={{width: "250px"}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                <ListItem>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        sx={{ bgcolor: deepPurple[300] }}
                        alt={name}
                        src="/broken-image.jpg"
                    >
                        </Avatar>
                        <ListItemText primary={name}/>
                </Stack> 
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={email} />
                </ListItem>
                <Button onClick={() => { dispatch(logout()); notifySucces('Bye!')}} sx={{ ml: "80px", mt: "15px"}}>Log Out</Button>
            </List>
        </Box>
    );
    return (
        <Stack spacing={3} direction="row" sx={{ ml: "auto", alignItems: "center" }}>
            <h2>Hello, {name}</h2>
                <div>
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
              <Avatar sx={{cursor: "pointer"}} src="/broken-image.jpg" onClick={toggleDrawer(anchor, true)}></Avatar>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
            </div>
            <Toaster/>
        </Stack>
    );
};

