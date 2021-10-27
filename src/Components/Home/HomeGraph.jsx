import React from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function HomeGraph() {
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
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default HomeGraph;
