import styled from 'styled-components';
import { bgCard, colorWhiteHover } from '../../GlobalStyles/Utilits';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-areas:
    'content content content'
    'sets sets sets'
    'footer footer footer';
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-areas:
      'content'
      'sets'
      'footer';
  }
`;

export const FirstContent = styled.div`
  grid-area: content;
  display: grid;
  gap: 1rem;
  grid-template-columns: 25rem 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const TotalAssets = styled.div`
  background: ${bgCard};
  border-radius: 0.3rem;
  padding: 1rem;
  color: whitesmoke;
`;
export const ResponsibilityTable = styled.div`
  height: 100%;
  background: ${bgCard};
  padding: 2rem 1rem;
  color: ${colorWhiteHover};
  border-radius: 0.3rem;
  width: 100%;
`;
export const Sets = styled.div`
  grid-area: sets;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export const MineCard = styled.div`
  text-align: center;
  background: ${bgCard};
  border-radius: 0.3rem;
  height: 22rem;
  display: grid;
  grid-template-rows: 1fr 4rem;

  div {
    width: 100%;
    background: #364150;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      max-width: 4rem;
      margin: 0 auto;
      padding: 0;
    }
  }

  button {
    margin: 0.6rem;
  }
`;
export const FooterHome = styled.footer`
  grid-area: footer;
  border-radius: 0.3rem;
  padding: 1rem;
  background: ${bgCard};
  display: grid;
  grid-template-columns: 25rem 1fr;
  align-items: center;
  gap: 2rem;
  color: ${colorWhiteHover};
  span {
    h2 {
      line-height: 1.5;
      font-size: 1rem;
    }
  }

  div {
    background: #364150;
    padding: 4rem;
    height: 100%;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 10rem;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const StatusColor = styled.div`
  padding: 0.6rem;
  background: ${(props) => props.color};
  border-radius: 0.3rem;
  font-size: 0.7rem;
`;
