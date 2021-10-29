import React from 'react';
import { AssetRespo } from './SingleStyle';
import { MineCard } from '../../Home/HomeStyle';
import { Links } from '../../../GlobalStyles/GlobalStyles';
import Responsess from '../../../Images/Responsess';

function AssetRespoComponent() {
  return (
    <AssetRespo>
      <MineCard>
        <div>
          <Responsess />
        </div>
        <Links to=''>Add user</Links>
      </MineCard>
    </AssetRespo>
  );
}

export default AssetRespoComponent;
