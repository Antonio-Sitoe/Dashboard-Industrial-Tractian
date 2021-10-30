import React from 'react';
import { Button, Links } from '../../GlobalStyles/GlobalStyles';
import { MineCard } from './HomeStyle';

function MiniCards({Element, text, to}) {
  return (
    <MineCard>
      <div>
        <Element />
      </div>
      <Links to={to}>{text}</Links>
    </MineCard>
  );
}

export default MiniCards;
