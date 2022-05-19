import styled from "@emotion/styled";
import { Box } from '@mui/material';
import {TextField} from '@mui/material';

export const ModalBox = styled(Box)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 450px;
min-height: 150px;
background-color: white;
padding: 40px;
border: 2px solid #000;
box-shadow: 24;
color: black;
display: flex;
flex-direction: column;
align-items: center;
`
export const Input = styled(TextField)`
background-color: white;
border-radius: 5px;
margin-bottom: 20px;
`