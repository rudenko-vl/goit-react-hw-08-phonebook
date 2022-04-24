import { useState, Fragment } from 'react';
import {Box, Drawer, List, ListItem, ListItemText, Avatar, Stack, Button } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './UserMenu.css';
import { deepPurple  } from '@mui/material/colors';

export const UserMenu = () => {
    const [state, setState] = useState({
        right: false,
    });
    const name = "Amigo";
    const email = 'amigo@gmail.com';
    
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
                <Button sx={{ ml: "80px", mt: "15px"}}>Log Out</Button>
            </List>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <Button sx={{ ml: "80px", mt: "15px"}}>Log Out</Button>
            </List> */}
        </Box>
    );
    return (
        <Stack spacing={3} direction="row" sx={{ ml: "auto", alignItems: "center" }}>
            <h2>Hello, Amigo!</h2>
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
        </Stack>
    );
};

