import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const List = styled.ul`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Item = styled.li`
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Error = styled.h1`
margin-top: 20px;
 color: red;
`;
export const Text = styled.p`
padding-right: 15px;
padding-left: 15px;
font-size: 18px;
font-weight: 600;
`

export const Ul = styled.ul`
display: flex;
`
export const UpdBtn = styled(Button)`
margin-left: 15px;
:hover{
  background: #4caf50;
} 
`
export const DelBtn = styled(Button)`
:hover{
  background: #bf1650;
} 
`
export const Div = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 300px;
`;

// export const SortBtn = styled(Button)`
// height: 40px;
// :hover{
//   background: #4caf50;
// } 
// `