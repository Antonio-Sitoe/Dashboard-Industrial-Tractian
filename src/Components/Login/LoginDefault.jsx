import React from 'react';
import { useNavigate } from 'react-router';
import { Links } from '../../GlobalStyles/GlobalStyles';
import Input from '../Forms/Input';
import { SectionUser } from '../Users/style';
import {
  Advice,
  LoginDefaultstyle,
  LoginTitle,
  SignUpstyle,
} from './LoginStyle';

function LoginDefault() {
  const [email, setEmail] = React.useState('Empresateste@gmail.com');
  const [password, setPassword] = React.useState('123');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError('Empty fields');
      return false;
    } else if (email !== 'Empresateste@gmail.com' || password !== '123') {
      setError('Email: "Empresateste@gmail.com", password:"123"');
      return false;
    } else {
      setError(null);
      navigate('/dashboard');
      return true;
    }
  }

  return (
    <SectionUser>
      <LoginDefaultstyle onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
        <Input
          name='Email'
          type='email'
          label='Email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder='Empresateste@gmail.com'
          error={error}
        />
        <Input
          name='password'
          type='password'
          label='Password'
          value={password}
          error={error}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Login</button>
      </LoginDefaultstyle>

      <SignUpstyle>
        <LoginTitle>Sign Up</LoginTitle>
        <p>Not resisted yet? create account for your company</p>
        <Links to='create'>Create an account</Links>
      </SignUpstyle>
      <Advice>
        Changes that will be made on this site are not persistent between calls.
      </Advice>
    </SectionUser>
  );
}

export default LoginDefault;
