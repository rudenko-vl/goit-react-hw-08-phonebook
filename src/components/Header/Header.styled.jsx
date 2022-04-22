import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

export const Bar = styled(AppBar)`
position: static;
padding: 10px;
background-color: #230CF7;
`

export const Text = styled(Typography)`
font-size: 26px;
font-weight: 600;
text-shadow: 0.5px 0 1px #000;
`
export const Link = styled(NavLink)`
text-decoration: none;
color: white;
font-weight: 700;
font-size: 24px;
transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
     transform: scale(1.1);
  }
&.active {
    color: #ffb800;
  }
`