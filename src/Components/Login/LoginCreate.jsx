import React from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { POST_COMPANY } from '../../Services/Api';
import Input from '../Forms/Input';
import { SectionUser } from '../Users/style';
import { LoginDefaultstyle, LoginTitle, Message } from './LoginStyle';

function LoginCreate() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  async function handleCreate(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Empty fields');
      return false;
    } else {
      const { url, options } = POST_COMPANY({
        name,
        email,
        password,
      });
      const { response } = await request(url, options);

      if (response.ok) {
        setMessage(true);
        
        navigate('/dashboard');
      }
      setError(null);
      return true;
    }
  }

  return (
    <SectionUser>
      <LoginDefaultstyle onSubmit={handleCreate}>
        <LoginTitle>Create an Account</LoginTitle>
        <Input
          name='name'
          type='text'
          label='Company Name'
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder='Empresa teste'
          error={error}
        />
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
          onChange={({ target }) => setPassword(target.value)}
          error={error}
        />
        {loading ? (
          <button>...Loading</button>
        ) : (
          <button>Create an Account</button>
        )}
        {message && <Message>Sucess</Message>}
      </LoginDefaultstyle>
    </SectionUser>
  );
}

export default LoginCreate;
