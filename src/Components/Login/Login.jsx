import React from 'react';
import { Route, Routes } from 'react-router';
import LoginDefault from './LoginDefault';
import Page404 from '../Page404/Page404';
import LoginCreate from './LoginCreate';
import LoginLeftBackground from './LoginLeftBackground';
import { ContainerLogin, ContentLogin } from './LoginStyle';

function Login() {
  return (
    <ContainerLogin>
      <LoginLeftBackground />
      <ContentLogin>
        <Routes>
          <Route path='' element={<LoginDefault />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </ContentLogin>
    </ContainerLogin>
  );
}

export default Login;
