import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from "redux/auth/auth-selectors";

export default function PrivateRoute({ children, navigateTo = '/' }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to={navigateTo}/>
};