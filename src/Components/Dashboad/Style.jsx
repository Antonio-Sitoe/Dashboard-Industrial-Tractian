import styled from 'styled-components';
import { AnimeLeft } from '../../GlobalStyles/GlobalStyles';
import {
  colorWhite,
  colorWhiteHover,
  dashbordbgColor,
} from '../../GlobalStyles/Utilits';

export const Painel = styled.section`
  padding: 0.6rem;
  height: 100%;
  display: ${(props) => props.display};

  @media (max-width: 800px) {
    padding: 0;
    position: fixed;
    transition: 0.6s;
    z-index: 100;
  }

  svg {
    path {
      fill: ${colorWhite};

      &:hover {
        fill: ${colorWhiteHover};
      }
    }
  }
`;
export const Dash = styled.div`
  position: fixed;
  top: 4rem;
  height: 80%;
  left: 2.5rem;
  background: ${dashbordbgColor};
  border-radius: 0.3rem;
  width: 14rem;
  padding: 1rem;
  animation: ${AnimeLeft} 0.3s;

  @media (max-width: 300px) {
    left: 1.5rem;
  }
`;

export const LogoDiv = styled.div`
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #d2d4d9;
`;

export const Ul = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 1rem 0 auto auto;
  width: 100%;

  li {
    a {
      color: ${colorWhite};
      padding: 0.6rem 1rem;
      width: 100%;

      display: flex;
      align-items: center;

      &:hover {
        color: ${colorWhiteHover};
      }

      span {
        margin-left: 1.5rem;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: none;
        text-align: center;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;
