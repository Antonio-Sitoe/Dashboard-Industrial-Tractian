import React from 'react';
import Phrase from '../../Images/Phrase';
import { FooterHome } from './HomeStyle';

function FooterHomeComponents() {
  return (
    <FooterHome>
      <div>
        <Phrase />
      </div>
      <span>
        <h2>
          Receba os insights e alarmes via WhatsApp, você tem praticidade para
          saber o status da sua máquina em tempo real.
        </h2>
      </span>
    </FooterHome>
  );
}

export default FooterHomeComponents;
