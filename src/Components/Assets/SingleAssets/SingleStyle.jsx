import styled from 'styled-components';
import { bgCard } from '../../../GlobalStyles/Utilits';

export const GeneralInfo = styled.main`
  display: grid;
  gap: 1rem;
  width: 100%;
  height: 100vh;
  border: 1px solid yellow;
  grid-template-columns: 20rem 1fr;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoAside = styled.aside`
  border: 1px solid teal;
  border-radius: 0.3rem;
  background: ${bgCard};
`;
export const HealthInfo = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-areas:
    'AssetGraph AssetGraph'
    'AssetStatus AssetConf'
    'AssetStatus  AssetRespo';
  gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-areas:
      'AssetGraph '
      'AssetStatus  '
      'AssetConf '
      ' AssetRespo';
  }
`;

export const AssetGraph = styled.div`
  grid-area: AssetGraph;
  background: ${bgCard};
  border: 1px solid green;
  border-radius: 0.3rem;
`;
export const AssetStatus = styled.div`
  grid-area: AssetStatus;
  background: ${bgCard};
  border: 1px solid blueviolet;
  border-radius: 0.3rem;
`;
export const AssetConf = styled.div`
  grid-area: AssetConf;
  background: ${bgCard};
  border: 1px solid whitesmoke;
  border-radius: 0.3rem;
`;
export const AssetRespo = styled.div`
  grid-area: AssetRespo;
  background: ${bgCard};
  border-radius: 0.3rem;
  border: 1px solid #ca3030;
`;
