import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { TotalAssets } from './HomeStyle';

function Verify(element, status) {
  return element.filter((item) => item.status === status).length;
}

function HomeGraph({ data }) {
  const [inAlert, setInAlert] = React.useState(() => Verify(data, 'inAlert'));
  const [inOperation, setInOperation] = React.useState(() =>
    Verify(data, 'inOperation')
  );
  const [inDownTime, setIndowntime] = React.useState(() =>
    Verify(data, 'inDowntime')
  );

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
        data: [inAlert],
        color: '#DB303F',
        style: {
          color: 'whitesmoke',
        },
      },
      {
        type: 'column',
        name: 'inOperation',
        data: [inOperation],
        color: '#DB8C28',
      },
      {
        type: 'column',
        name: 'inDowntime',
        data: [inDownTime],
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
    <TotalAssets>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </TotalAssets>
  );
}

export default HomeGraph;
