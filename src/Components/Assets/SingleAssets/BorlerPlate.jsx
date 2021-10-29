import React from 'react';

import { Title } from '../../Users/style';
import { AssetConf } from './SingleStyle';

function BorlerPlate({ titles, percent }) {
  return (
    <AssetConf>
      <Title>{titles}</Title>
      <span>
        <p>{percent}</p>
      </span>
    </AssetConf>
  );
}

export default BorlerPlate;
