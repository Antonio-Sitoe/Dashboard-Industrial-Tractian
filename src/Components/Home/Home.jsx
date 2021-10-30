import React from 'react';
import { SectionUser } from '../Users/style';
import { FirstContent, HomeContainer, Sets } from './HomeStyle';
import AtivoCard from '../../Images/AtivoCard';
import Person from '../../Images/Person';
import Unidade from '../../Images/Unidade';
import MiniCards from './MiniCards';
import FooterHomeComponents from './FooterHomeComponents';
import Tables from './Tables';
import HomeGraph from './HomeGraph';
import { UserContext } from '../../Context/UserContext';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

function Home() {
  const { data, setData, loading, error } = React.useContext(UserContext);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <SectionUser>
        <HomeContainer>
          <FirstContent>
            <HomeGraph data={data} />
            <Tables data={data}/>
          </FirstContent>
          <Sets>
            <MiniCards Element={AtivoCard} to='Addassets' text='Add assets' />
            <MiniCards Element={Unidade} to='Adduser' text='Add user' />
            <MiniCards Element={Person} to='Addunit' text='Add unit' />
          </Sets>
          <FooterHomeComponents />
        </HomeContainer>
      </SectionUser>
    );
  return <Loading />;
}

export default Home;
