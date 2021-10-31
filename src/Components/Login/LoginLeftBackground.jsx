import React from 'react';
import { LoginLeft } from './LoginStyle';
import Network from '../../Images/NetWork.svg';

function LoginLeftBackground() {
  return (
    <LoginLeft>
      <div>
        <img src={Network} alt='s' />
        <p>Keep your team and assets performing at their best</p>
      </div>
    </LoginLeft>
  );
}

export default React.memo(LoginLeftBackground);
