import React from 'react';
import styled from 'styled-components';
import NetWork from '../../Images/NetWork.svg';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  p {
    text-align: center;
  }
`;

function Error({ error }) {
  if (error)
    return (
      <Main>
        <div>
          <img src={NetWork} alt='d' />
          <p>{error}</p>
        </div>
      </Main>
    );
  return null;
}

export default Error;
