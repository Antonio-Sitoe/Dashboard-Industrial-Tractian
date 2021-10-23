import styled from 'styled-components';
import {
  colorWhite,
  colorWhiteHover,
  dashbordbgColor,
} from '../../GlobalStyles/Utilits';

export const Painel = styled.section`
  padding: 0.6rem;
  height: 100%;
  border: 1px solid red;
  display: ${(props) => props.display};
  @media (max-width: 800px) {
    padding: 0;
  }
`;
export const Dash = styled.div`
  position: fixed;
  top: 8rem;
  background: ${dashbordbgColor};
  border-radius: 0.3rem;
  width: 14rem;
  padding: 1rem;

  @media (max-width: 800px) {
    position: initial;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 0;
    transition: 0.5s;
    width: 17rem;
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
  padding: 1rem ;
`;
