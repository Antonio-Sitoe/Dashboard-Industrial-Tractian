import React from 'react';
import { SectionUser } from '../../Users/style';
import Responsess from '../../../Images/Responsess'
import {
  AssetGraph,
  AssetRespo,
  AssetStatus,
  AssetConf,
  GeneralInfo,
  HealthInfo,
  InfoAside,
} from './SingleStyle';

import { MineCard } from '../../Home/HomeStyle';
import { Links } from '../../../GlobalStyles/GlobalStyles';
function SingleAssets() {
  return (
    <SectionUser>
      <GeneralInfo>
        <InfoAside></InfoAside>
        <HealthInfo>
          <AssetGraph></AssetGraph>
          <AssetStatus></AssetStatus>
          <AssetConf></AssetConf>
          <AssetRespo>
            <MineCard>
              <div>
                <Responsess/>
              </div>
              <Links to=''>Add user</Links>
            </MineCard>
          </AssetRespo>
        </HealthInfo>
      </GeneralInfo>
    </SectionUser>
  );
}

export default SingleAssets;
