import React from 'react';
import { SectionUser } from '../../Users/style';

import { GeneralInfo, HealthInfo } from './SingleStyle';

import InfoAsideComponent from './InfoAsideComponent';
import AssetStatusComponent from './AssetStatusComponent';
import AssetConfComponent from './AssetConfComponent';
import AssetUptimeComponent from './AssetUptimeComponent';
import AssetRespoComponent from './AssetRespoComponent';
import AssetGraphComponent from './AssetGraphComponent';
function SingleAssets() {
  return (
    <SectionUser>
      <GeneralInfo>
        <InfoAsideComponent />
        <HealthInfo>
          <AssetGraphComponent />
          <AssetStatusComponent />
          <AssetConfComponent />
          <AssetUptimeComponent />
          <AssetRespoComponent />
        </HealthInfo>
      </GeneralInfo>
    </SectionUser>
  );
}

export default SingleAssets;
