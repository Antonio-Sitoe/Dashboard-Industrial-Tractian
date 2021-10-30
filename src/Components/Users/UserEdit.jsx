import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { GET_UNITID, GET_USER, PUT_USER } from '../../Services/Api';
import { SectionUser, Title, UserEditMain } from './style';
import Input from '../Forms/Input';
import { Button } from '../../GlobalStyles/GlobalStyles';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

function UserEdit() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [btn, setBtn] = React.useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const { request, data, error } = useFetch();

  async function handleChangeUser(e) {
    e.preventDefault();
    setBtn(true);
    const { url, options } = PUT_USER(
      {
        name,
        email,
        unit: unit.id,
      },
      id
    );
    const { response } = await request(url, options);
    if (response.ok) {
      setBtn(false);
      navigate('/dashboard/users');
    }
  }
  React.useEffect(() => {
    async function GetElements() {
      const { url, options } = GET_USER(id);
      const { json, response } = await request(url, options);

      const uniUrl = GET_UNITID(json.unitId);
      const unitId = await request(uniUrl.url, uniUrl.options);

      if (response.ok) {
        setName(json.name);
        setEmail(json.email);
        setUnit(unitId.json);
      }
    }
    let ammount = true;
    if (ammount) GetElements();

    return () => (ammount = false);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <SectionUser>
        <UserEditMain>
          <Title>Edit User</Title>
          <form onSubmit={handleChangeUser}>
            <Input
              name='name'
              type='text'
              label='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
              error={error}
            />
            <Input
              name='email'
              type='text'
              label='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              error={error}
            />
            <select name='unit' id='unit'>
              <option value={unit.name}>{unit.name}</option>
            </select>
            <Button>{btn ? '...Loading' : 'Save'}</Button>
          </form>
        </UserEditMain>
      </SectionUser>
    );
  return <Loading />;
}

export default UserEdit;
