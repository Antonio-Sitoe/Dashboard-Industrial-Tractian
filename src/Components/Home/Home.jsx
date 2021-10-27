import React from 'react';
import { Button } from '../../GlobalStyles/GlobalStyles';
import { SectionUser, Table, Tbody, Theader, Title } from '../Users/style';
import {
  FirstContent,
  FooterHome,
  HomeContainer,
  MineCard,
  ResponsibilityTable,
  Sets,
  StatusColor,
  TotalAssets,
} from './HomeStyle';

import AtivoCard from '../../Images/AtivoCard';
import Person from '../../Images/Person';
import Unidade from '../../Images/Unidade';
import Phrase from '../../Images/Phrase';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function Home() {
  const options = {
    chart: {
      height: 300,
      backgroundColor: '#364150',
      borderRadius: 10,
    },
    title: {
      text: 'Assets Status',
      style: {
        color: 'whitesmoke',
      },
    },
    series: [
      {
        type: 'column',
        name: 'InAlert',
        data: [3],
        color: '#DB303F',
        style: {
          color: 'whitesmoke',
        },
      },
      {
        type: 'column',
        name: 'inOperation',
        data: [2],
        color: '#DB8C28',
      },
      {
        type: 'column',
        name: 'inDowntime',
        data: [4],
        color: '#45C86D',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 300,
          },
        },
      ],
    },
  };
  return (
    <SectionUser>
      <HomeContainer>
        <FirstContent>
          <TotalAssets>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </TotalAssets>
          <ResponsibilityTable>
            <Table>
              <Theader>
                <tr>
                  <th>Assets</th>
                  <th>Status</th>
                  <th>Responsible</th>
                </tr>
              </Theader>
              <Tbody>
                <tr>
                  <td>name</td>
                  <td>
                    <StatusColor color='#db303f'>InAlert</StatusColor>
                  </td>
                  <td>0000unitId</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>
                    <StatusColor color='#45C86D'>InAlert</StatusColor>
                  </td>
                  <td>0000unitId</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>
                    <StatusColor color='#DB8C28'>InAlert</StatusColor>
                  </td>
                  <td>0000unitId</td>
                </tr>
              </Tbody>
            </Table>
          </ResponsibilityTable>
        </FirstContent>
        <Sets>
          <MineCard>
            <div>
              <AtivoCard />
            </div>
            <Button>Add assets</Button>
          </MineCard>
          <MineCard>
            <div>
              <Person />
            </div>
            <Button>Add user</Button>
          </MineCard>
          <MineCard>
            <div>
              <Unidade />
            </div>
            <Button>Add unit</Button>
          </MineCard>
        </Sets>
        <FooterHome>
          <div>
            <Phrase />
          </div>
          <span>
            <h2>
              Receba os insights e alarmes via WhatsApp, você tem praticidade
              para saber o status da sua máquina em tempo real.
            </h2>
          </span>
        </FooterHome>
      </HomeContainer>
    </SectionUser>
  );
}

export default Home;
