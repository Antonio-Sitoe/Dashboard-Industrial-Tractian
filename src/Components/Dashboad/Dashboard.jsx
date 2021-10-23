import React from 'react';
import { Route, Routes } from 'react-router';
import { Container } from '../../GlobalStyles/GlobalStyles';
import Panel from './Panel';
import Home from '../Home/Home';
import Assets from '../Assets/Assets';
import Users from '../Users/Users';
import Company from '../Company/Company';
import Units from '../Units/Units';
import { Content } from './Style';
import useMedia from '../../Hooks/useMedia';

function Dashboard() {
  const mobile = useMedia('(max-width:40rem)');
  const [ShowPanel, setShowPanel] = React.useState(false);
  React.useEffect(() => {
    if (mobile) {
      setShowPanel(true);
    } else {
      setShowPanel(false);
    }
  }, [mobile]);

  return (
    <Container mobile={ShowPanel ? '1fr' : '17rem 1fr'}>
      <Panel ShowPanel={ShowPanel} />
      <Content>
        <button onClick={() => setShowPanel(!ShowPanel)}>sate</button>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='assets' element={<Assets />} />
          <Route path='users' element={<Users />} />
          <Route path='units' element={<Units />} />
          <Route path='company' element={<Company />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default Dashboard;
