import styled from "@emotion/styled";
export const Main = () => {
    return <Div>
        <Text>Sign up or sign in!</Text>
    </Div>
}

const Div = styled.div`
width: 100%;
height: 100%;
background-image: url("https://cdn.pixabay.com/photo/2022/03/04/18/01/ukraine-7047830_960_720.jpg");
background-size: cover;
background-repeat: no-repeat;
/* background-position: 50% 50%; */
`
const Text = styled.h1`
font-size: 35px;
margin-left: auto;
margin-right: auto;
text-align: center;
color: white;
`