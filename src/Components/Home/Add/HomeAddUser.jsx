import React from 'react';
import { SectionUser, Title } from '../../Users/style';
import { HomeAddAssetStyle, HomeAddMain } from './Styles';
import Input from '../../Forms/Input';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import useFetch from '../../../Hooks/useFetch';
import { GET_UNITS, POST_USERS } from '../../../Services/Api';
import Loading from '../../Helper/Loading';
import { useNavigate } from 'react-router';

function HomeAddUser() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [units, setUnits] = React.useState(null);
  const [post, setPost] = React.useState(false);
  const { request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getUnits() {
      const { url, options } = GET_UNITS();
      const { json, response } = await request(url, options);
      if (response.ok) setUnits(json);
    }

    let amount = true;
    if (amount) getUnits();
    return () => (amount = false);
  }, [request]);

  async function handleSubmit(e) {
    e.preventDefault();
    setPost(true);
    const { url, options } = POST_USERS({
      name,
      email,
      unit,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      setPost(false);
      navigate('/dashboard');
    }
  }
  if (units)
    return (
      <SectionUser>
        <HomeAddAssetStyle>
          <Title>Add new User</Title>
          <HomeAddMain onSubmit={handleSubmit}>
            <Input
              name='name'
              type='text'
              label='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              name='email'
              type='email'
              label='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <select
              value={unit}
              name='unit'
              id='uni'
              onChange={({ target }) => setUnit(target.value)}
            >
              {units.map(({ id, name }) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>

            <Button> {post ? '...Loading' : 'Save User'}</Button>
          </HomeAddMain>
        </HomeAddAssetStyle>
      </SectionUser>
    );
  return <Loading />;
}

export default HomeAddUser;
