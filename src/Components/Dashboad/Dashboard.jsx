import React from 'react';
import { Route, Routes } from 'react-router';
import { Container } from '../../GlobalStyles/GlobalStyles';
import Panel from './Panel';
import Home from '../Home/Home';
import Users from '../Users/Users';

import Units from '../Units/Units';
import { Content } from './Style';
import useMedia from '../../Hooks/useMedia';
import Header from '../Header/Header';
import AssetsDefaults from '../Assets/AssetsDefaults';
import Page404 from '../Page404/Page404';
import ComponyDefault from '../Company/ComponyDefault';
import Company from '../Company/Company';
import ComponyEdit from '../Company/ComponyEdit';

function Dashboard() {
  const mobile = useMedia('(max-width:800px)');
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
        <Header ShowPanel={ShowPanel} setShowPanel={setShowPanel} />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='assets/*' element={<AssetsDefaults />} />
          <Route path='users' element={<Users />} />
          <Route path='units' element={<Units />} />
          <Route path='company/*' element={<ComponyDefault />}>
            <Route path='' element={<Company />} />
            <Route path='edit' element={<ComponyEdit />} />
            <Route path='*' element={<Page404 />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default Dashboard;
