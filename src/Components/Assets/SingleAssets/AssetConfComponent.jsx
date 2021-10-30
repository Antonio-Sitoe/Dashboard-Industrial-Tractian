import React from 'react';
import BorlerPlate from './BorlerPlate';

function AssetConfComponent({ data }) {
  return <BorlerPlate titles='Real situation' percent={data + '%'} />;
}

export default AssetConfComponent;
