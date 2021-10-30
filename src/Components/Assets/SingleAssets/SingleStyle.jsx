import styled from 'styled-components';
import { bgCard, colorGreen, colorWhite } from '../../../GlobalStyles/Utilits';

export const GeneralInfo = styled.main`
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: 1fr;
`;

export const InfoAside = styled.aside`
  border-radius: 0.3rem;
  background: ${bgCard};
  position: relative;
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
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
    height: 20rem;
  }

  ul {
    margin-top: 2rem;

    li {
      font-size: 0.9rem;
      margin: 1rem 0;
    }
  }
  div {
    padding: 0;
    margin: 0;
    button {
      width: 90%;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const HealthInfo = styled.div`
  display: grid;
  grid-template-columns: 17rem 1fr;
  grid-template-areas:
    'AssetStatus AssetGraph'
    'AssetConf AssetGraph'
    'AssetUptime AssetRespo';
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
      background: ${(props) => props.color};
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

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  main {
    padding: 0;
    margin: 0;
    background: ${bgCard};
  }

  a {
    margin: 0.6rem;
  }

  section {
    border-radius: 0.3rem;
    background: ${bgCard};
    padding: 1rem;
    color: ${colorWhite};

    ul {
      display: grid;
      gap: 1rem;

      li {
        display: flex;
        align-items: center;

        &::before {
          content: '';
          width: 0.6rem;
          height: 0.1rem;
          margin-right: 0.6rem;
          background: white;
        }
      }
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
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
