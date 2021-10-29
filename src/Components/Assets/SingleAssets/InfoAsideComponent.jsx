import React from 'react';
import { InfoAside } from './SingleStyle';
import Fake from '../../../Images/fake.png';
import { List } from '../AssetsStyle';
import { Button } from '../../../GlobalStyles/GlobalStyles';

function InfoAsideComponent() {
  return (
    <InfoAside>
      <span>Motor H13D-1</span>
      <img src={Fake} alt='d' />
      <List>
        <li>
          <strong>Sensors: </strong>
          heelo
        </li>
        <li>
          <strong>Temperature: </strong>
          hello
        </li>
        <li>
          <strong>Status: </strong>
          hello
        </li>
        <li>
          <strong>Healthscore: </strong>
          hello
        </li>
        <li>
          <strong>Power: </strong>
          hello hello
        </li>
        <li>
          <strong>RPM: </strong>
          hello hello
        </li>
        <li>
          <strong>Empresa: </strong>
          hello hello
        </li>
        <li>
          <strong>Unidade: </strong>
          hello hello
        </li>
      </List>

      <div>
        <Button>Editar</Button>
      </div>
    </InfoAside>
  );
}

export default InfoAsideComponent;
