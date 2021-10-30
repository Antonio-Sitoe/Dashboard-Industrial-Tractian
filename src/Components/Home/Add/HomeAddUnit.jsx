import React from 'react';
import { SectionUser, Title } from '../../Users/style';
import { HomeAddAssetStyle, HomeAddMain } from './Styles';
import Input from '../../Forms/Input';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import useFetch from '../../../Hooks/useFetch';
import { POST_UNIT } from '../../../Services/Api';
import { useNavigate } from 'react-router';

function HomeAddUnit() {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [post, setPost] = React.useState(false);
  const { request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setPost(true);
    const { url, options } = POST_UNIT({
      name,
      about,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      setPost(false);
      navigate('/dashboard');
    }
  }

  return (
    <SectionUser>
      <HomeAddAssetStyle>
        <Title>Add new Unit</Title>
        <HomeAddMain onSubmit={handleSubmit}>
          <Input
            name='name'
            type='text'
            label='Unit name'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <textarea
            name=''
            id=''
            cols='30'
            value={about}
            onChange={({ target }) => setAbout(target.value)}
            rows='10'
          ></textarea>
          <Button> {post ? '...Loading' : 'Save Unit'}</Button>
        </HomeAddMain>
      </HomeAddAssetStyle>
    </SectionUser>
  );
}

export default HomeAddUnit;
