import React from 'react';
import { SectionUser, Title } from '../../Users/style';
import { HomeAddAssetStyle, HomeAddMain } from './Styles';
import Input from '../../Forms/Input';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import useFetch from '../../../Hooks/useFetch';
import { GET_UNITS, POST_ASSETS } from '../../../Services/Api';
import Loading from '../../Helper/Loading';
import { useNavigate } from 'react-router';

function HomeAddAssets() {
  const [name, setName] = React.useState('');
  const [model, setModal] = React.useState('');
  const [sensor, setSensor] = React.useState('');
  const [date, setDate] = React.useState('');
  const [file, setFile] = React.useState('');
  const { request } = useFetch();
  const [units, setUnits] = React.useState(null);
  const [unit, setUnit] = React.useState('');
  const [post, setPost] = React.useState(false);
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
    const { url, options } = POST_ASSETS({
      name,
      model,
      sensor,
      date,
      file,
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
          <Title>Add new Asset</Title>
          <HomeAddMain onSubmit={handleSubmit}>
            <Input
              name='name'
              type='text'
              label='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              name='model'
              type='text'
              label='Model'
              value={model}
              onChange={({ target }) => setModal(target.value)}
            />
            <Input
              name=''
              type='text'
              label='Sensors'
              value={sensor}
              onChange={({ target }) => setSensor(target.value)}
            />

            <select
              value={unit}
              name='unit'
              id='uni'
              onChange={({ target }) => setUnit(target.value)}
            >
              {units.map(({ name }, index) => {
                return (
                  <option key={index} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
            <div>
              <p>Date</p>
              <input
                type='datetime-local'
                name='date'
                id='date'
                value={date}
                onChange={({ target }) => setDate(target.value)}
              />
            </div>
            <div>
              <p>Add image</p>
              <input
                type='file'
                onChange={({ target }) => setFile(target.value)}
                name='image'
                id='image'
                value={file}
              />
            </div>
            <Button> {post ? '...Loading' : 'Save Asset'}</Button>
          </HomeAddMain>
        </HomeAddAssetStyle>
      </SectionUser>
    );
  return <Loading />;
}

export default HomeAddAssets;
