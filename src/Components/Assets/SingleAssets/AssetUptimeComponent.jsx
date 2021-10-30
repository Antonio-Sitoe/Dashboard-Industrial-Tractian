import React from 'react';
import BorlerPlate from './BorlerPlate';
import { AssetUptime } from './SingleStyle';

function AssetUptimeComponent({ data }) {
  const date = new Date(data.lastUptimeAt);
  return (
    <AssetUptime>
      <BorlerPlate
        titles='Total Up time'
        percent={Number(data.totalUptime).toFixed() + ' hours'}
      />
      <BorlerPlate
        titles='Total Collection Up time'
        percent={data.totalCollectsUptime}
      />
      <BorlerPlate
        titles='Last Collection'
        percent={date.toLocaleDateString('en-GB')}
      />
    </AssetUptime>
  );
}

export default AssetUptimeComponent;
