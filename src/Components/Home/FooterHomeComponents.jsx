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
        Receive insights and alarms via WhatsApp, you have the convenience to
          know or status of your machine in real time.
        </h2>
      </span>
    </FooterHome>
  );
}

export default FooterHomeComponents;
