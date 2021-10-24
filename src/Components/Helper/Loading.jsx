import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../../GlobalStyles/GlobalStyles';

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function Loading() {
  return (
    <Flex>
      <Spinner></Spinner>
    </Flex>
  );
}

export default Loading;
