import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material"; 
 export const MyComponent = () => {
    const location = useLocation();
    return (
        <>
            <h1>Hello, Amigo! 😀</h1>
            <Link to={location?.state ?? '/'} style={{textDecoration: "none"}}>
                <Button sx={{background: "white"}}>Go back</Button>
            </Link>
        </>
    )
};