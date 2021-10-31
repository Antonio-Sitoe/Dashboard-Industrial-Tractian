import React from 'react';
import { InfoAside } from './SingleStyle';
import { List } from '../AssetsStyle';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import Image from '../../Image/Image';
import { CleanElements } from '../Assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InfoAsideComponent({ data }) {
  function handleclick() {
    toast.info('you must have permission for this action!');
  }
  return (
    <InfoAside>
      <span>{data.name}</span>
      <Image src={data.image} alt='image perfil' />
      <List>
        <li>
          <strong>Sensors: </strong>
          {CleanElements(data.sensors[0])}
        </li>
        <li>
          <strong>Temperature: </strong>
          {CleanElements(data.specifications.maxTemp, '%')}
        </li>
        <li>
          <strong>Status: </strong>
          {CleanElements(data.status)}
        </li>
        <li>
          <strong>Healthscore: </strong>
          {CleanElements(data.healthscore, '%')}
        </li>
        <li>
          <strong>Power: </strong>
          {CleanElements(data.specifications.power, 'kWh')}
        </li>
        <li>
          <strong>RPM: </strong>
          {CleanElements(data.specifications.rpm, 'kWh')}
        </li>
        <div>
          <Button onClick={handleclick}>Edit</Button>
        </div>
        <ToastContainer />
      </List>
    </InfoAside>
  );
}

export default InfoAsideComponent;
