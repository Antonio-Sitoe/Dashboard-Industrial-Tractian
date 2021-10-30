import React from 'react';
import { Title } from '../../Users/style';
import { AssetStatus, StatusBar } from './SingleStyle';

function AssetStatusComponent({ data }) {
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    switch (data) {
      case 'inOperation':
        setColor('#45C86D');
        break;
      case 'inDowntime':
        setColor('#DB8C28');
        break;
      default:
        setColor('#DB303F');
        break;
    }
  }, []);

  return (
    <AssetStatus color={color}>
      <Title>Status: {data}</Title>
      <StatusBar background='#DB303F'>In Alert</StatusBar>
      <StatusBar background='#DB8C28'>inDowntime</StatusBar>
      <StatusBar background='#45C86D'>inOperation</StatusBar>
    </AssetStatus>
  );
}

export default AssetStatusComponent;
