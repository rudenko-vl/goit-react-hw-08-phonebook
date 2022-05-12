import { Toolbar, Stack } from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Bar, Text, Link } from "./Header.styled";
import { UserMenu } from "components";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export const Header = () => {
    const logged = useSelector(getIsLoggedIn);

    return <Bar>
        <Toolbar>
            <PhoneIphoneIcon sx={{ mr: 1 }} />
                <Text
                variant="h6"
                component="span">
                Phonebook
            </Text>
            <Stack spacing={3} direction="row" sx={{ml: "30px"}}>
                <Link to="/">Home</Link>
                <Link to="/register">New account</Link>
                <Link to="/login">Log In</Link>
                <Link to="/phonebook">Contacts</Link>
            </Stack>
            {logged && <UserMenu/>} 
        </Toolbar>
    </Bar>
};