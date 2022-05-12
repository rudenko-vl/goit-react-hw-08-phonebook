import { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from './App.styled';
import { createAsyncView } from 'helpers/createAsyncView';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { refreshUser } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';


const App = () => {
  const HomePage = createAsyncView('HomePage');
  const NewAccountPage = createAsyncView('NewAccountPage');
  const LogInPage = createAsyncView('LogInPage');
  const ContactsPage = createAsyncView('ContactsPage');
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <Suspense fallback={'Loading...'}>
      <Container>
        {
          isRefreshing ? null :
            <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<PublicRoute restricted><NewAccountPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute restricted><LogInPage /></PublicRoute>} />
              <Route path="/phonebook" element={
                <PrivateRoute><ContactsPage /></PrivateRoute>
              } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      }
      </Container>
      </Suspense>
  );
};

export default App;
