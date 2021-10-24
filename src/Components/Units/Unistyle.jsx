import styled from 'styled-components';

export const MainUnits = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    display: block;
    width: 100%;
  }

  p {
    line-height: 2;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Graphs = styled.div``;
