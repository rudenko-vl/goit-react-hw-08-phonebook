import styled from "@emotion/styled";

export const List = styled.ul`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Item = styled.li`
  width: 450px;
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
font-size: 18px;
font-weight: 600;
`