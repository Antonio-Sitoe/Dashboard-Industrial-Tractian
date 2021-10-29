import React from 'react';
import { Title } from '../../Users/style';
import { AssetStatus, StatusBar } from './SingleStyle';

function AssetStatusComponent() {
  return (
    <AssetStatus>
      <Title>Status: In Alert</Title>
      <StatusBar background='#DB303F'>In Alert</StatusBar>
      <StatusBar background='#DB8C28'>inDowntime</StatusBar>
      <StatusBar background='#45C86D'>inOperation</StatusBar>
    </AssetStatus>
  );
}

export default AssetStatusComponent;
