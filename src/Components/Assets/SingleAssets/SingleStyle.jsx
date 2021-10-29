import styled from 'styled-components';
import { bgCard, colorWhite } from '../../../GlobalStyles/Utilits';

export const GeneralInfo = styled.main`
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: 20rem 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoAside = styled.aside`
  border-radius: 0.3rem;
  background: ${bgCard};
  position: relative;
  width: 100%;
  text-align: center;
  display: grid;
  span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.6rem 1rem;
    background: #45c86d;
    border-radius: 0 0.3rem 0 0;
  }

  img {
    width: 100%;
    height: 16rem;
  }

  ul {
    margin-top: 1rem;

    li {
      font-size: 0.9rem;
      margin: 1.5rem 0;
    }
  }

  button {
    width: 90%;
  }
`;
export const HealthInfo = styled.div`
  display: grid;
  grid-template-columns: 17rem 1fr;
  grid-template-areas:
    'AssetStatus AssetGraph'
    'AssetConf AssetGraph'
    'AssetRespo  AssetUptime ';
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'AssetGraph '
      'AssetStatus  '
      'AssetConf '
      ' AssetRespo'
      ' AssetUptime';
  }
`;

export const AssetGraph = styled.div`
  grid-area: AssetGraph;
  background: ${bgCard};
`;
export const AssetStatus = styled.div`
  grid-area: AssetStatus;
  background: ${bgCard};
  border-radius: 0.3rem;

  display: grid;
  gap: 1rem;
  padding: 1rem;

  h2 {
    text-align: center;
    color: ${colorWhite};
    font-size: 1rem;
    position: relative;
    &::after {
      content: '';
      background: #865959;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  div {
    border-radius: 0.4rem;
    padding: 0.4rem;

    color: ${colorWhite};
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const StatusBar = styled.div`
  background: ${(props) => props.background};
`;
export const AssetConf = styled.div`
  grid-area: AssetConf;
  background: ${bgCard};
  border-radius: 0.3rem;
  color: white;
  padding: 1rem;

  span {
    text-align: center;
    p {
      margin: 2rem;
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;
export const AssetRespo = styled.div`
  grid-area: AssetRespo;
  background: ${bgCard};
  border-radius: 0.3rem;
  div {
    padding: 0;
    margin: 0;
  }

  a {
    margin: 0.6rem;
  }
`;

export const AssetUptime = styled.div`
  grid-area: AssetUptime;
  background: ${bgCard};
  border-radius: 0.3rem;
  height: 100%;
  margin: 0;
  padding: 0;

  div {
    background: #364150;
    display: grid;
    gap: 1rem;
    margin-bottom: 0.2rem;

    p {
      margin: 0;
      padding: 0.3rem 0;
    }
  }
`;
