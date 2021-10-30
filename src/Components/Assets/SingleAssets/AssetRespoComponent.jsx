import React from 'react';
import { AssetRespo } from './SingleStyle';
import { MineCard } from '../../Home/HomeStyle';
import { Links } from '../../../GlobalStyles/GlobalStyles';
import Responsess from '../../../Images/Responsess';
import { Title } from '../../Users/style';
import { UserContext } from '../../../Context/UserContext';

function AssetRespoComponent() {
  const { responsable } = React.useContext(UserContext);
  return (
    <AssetRespo>
      <MineCard>
        <div>
          <Responsess />
        </div>
        <Links to='responsable'>Add responsible</Links>
      </MineCard>
      <section>
        <Title>Responsable</Title>

        <ul>
          {responsable.length !== 0 ? (
            responsable.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          ) : (
            <p>no responsable</p>
          )}
        </ul>
      </section>
    </AssetRespo>
  );
}

export default AssetRespoComponent;
