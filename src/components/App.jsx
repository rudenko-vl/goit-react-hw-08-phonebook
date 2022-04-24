import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from './App.styled';
import { createAsyncView } from 'helpers/createAsyncView';


const App = () => {
  const HomePage = createAsyncView('HomePage');
  const NewAccountPage = createAsyncView('NewAccountPage');
  const LogInPage = createAsyncView('LogInPage');
  const ContactsPage = createAsyncView('ContactsPage');

  return (
    <Suspense fallback={'Loading...'}>
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<NewAccountPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/phonebook" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Container>
      </Suspense>
  );
};

export default App;
