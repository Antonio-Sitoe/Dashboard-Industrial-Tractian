import React from 'react';
import { SectionUser } from '../Users/style';
import PageError404 from '../../Images/PageError404';
import { colorWhite } from '../../GlobalStyles/Utilits';
import styled from 'styled-components';
import { Links } from '../../GlobalStyles/GlobalStyles';
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  div {
    display: grid;
    text-align: center;
    gap: 1rem;

    h2 {
      text-align: center;
      color: ${colorWhite};
    }
  }
`;

function Page404() {
  return (
    <SectionUser>
      <Main>
        <div>
          <PageError404 />
          <h2>404 - Not Found</h2>
          <Links to='/dashboard'>Back to home</Links>
        </div>
      </Main>
    </SectionUser>
  );
}

export default Page404;
