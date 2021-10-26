import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { bgCard } from '../../GlobalStyles/Utilits';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 300px;
  margin: 0 auto;
`;

function UnitGraphs({ title, assetValue, userValue }) {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: bgCard,
      borderRadius: 12,
    },
    title: {
      text: title,
      align: 'center',
      verticalAlign: 'middle',
      y: 130,
      style: {
        fontWeight: 'bold',
        color: 'white',
      },
    },
    tooltip: {
      pointFormat:
        '{series.name} <b>{point.percentage:.1f}%</b> </br>' +
        '{series.name} <b>{point.y}</b><br/>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        type: 'pie',
        innerSize: '50%',
        data: [
          ['Users', userValue],
          ['Assets', assetValue],
        ],
      },
    ],
  };
  return (
    <Main>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Main>
  );
}

export default UnitGraphs;
