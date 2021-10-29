import React from 'react';
import BorlerPlate from './BorlerPlate';
import { AssetUptime } from './SingleStyle';

function AssetUptimeComponent() {
  return (
    <AssetUptime>
      <BorlerPlate titles='Total de coletas' percent='1279' />
      <BorlerPlate titles='Total de Horas de coletas' percent='1421 horas' />
      <BorlerPlate titles='Ultima Coleta:' percent='16/02/2021' />
    </AssetUptime>
  );
}

export default AssetUptimeComponent;
