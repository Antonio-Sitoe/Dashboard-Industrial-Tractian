import React from 'react';
import { AssetGraph } from './SingleStyle';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { bgCard } from '../../../GlobalStyles/Utilits';

function AssetGraphComponent({ data }) {
  const options = {
    chart: {
      type: 'spline',
      backgroundColor: bgCard,
      borderRadius: 10,
    },
    title: {
      text: 'Monthly Average Temperature',
      style: {
        color: 'white',
      },
    },
    subtitle: {
      text: 'Temperature',
      style: {
        color: 'white',
      },
    },
    xAxis: {
      categories: ['Oct'],
    },
    yAxis: {
      title: {
        text: 'Temperature',
      },
      labels: {
        formatter: function () {
          return this.value + '°';
        },
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        name: 'Tokyo',
        marker: {
          symbol: 'square',
        },
        data: [
          7.0,
          6.9,
          9.5,
          14.5,
          18.2,
          25.2,
          23.3,
          18.3,
          data.specifications.maxTemp,
          13.9,
          9.6,
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 900,
          },
        },
      ],
    },
  };
  return (
    <AssetGraph>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </AssetGraph>
  );
}

export default AssetGraphComponent;
