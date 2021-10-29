import styled from 'styled-components';
import {
  backgroundColor,
  bgCard,
  borderColor,
  colorWhite,
  dashbordbgColor,
} from '../../GlobalStyles/Utilits';

export const Main = styled.main`
  margin: 2rem auto;
  max-width: 900px;

  p,
  h4 {
    margin-top: 0.6rem;
    line-height: 1.8;
  }

  a {
    margin-top: 1rem;
  }
`;
export const Img = styled.img`
  height: 25rem;
  border-radius: 0.3rem;

  @media (max-width: 400px) {
    height: 15rem;
  }
`;

export const BtnStyleCampany = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
`;

export const ComponyEditStyle = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
  background: ${bgCard};
  color: white;
  padding: 2rem;
  border-radius: 0.3rem;

  input {
    background: ${backgroundColor};
    border: 1px solid ${borderColor};
    color: ${colorWhite};

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid ${dashbordbgColor};
    }
  }

  textarea {
    color: ${colorWhite};
    height: 6rem;
    font-family: 'monospace';
    font-size: 0.8rem;
    border-radius: 0.3rem;
    padding: 1rem;
    background: ${backgroundColor};
    border: 1px solid ${borderColor};
    &:hover,
    &:focus {
      outline: none;
      border: 1px solid ${dashbordbgColor};
    }
  }

  select {
    background: ${backgroundColor};
    padding: 0.6rem;
    border: none;
    border-radius: 0.3rem;
    border: 1px solid ${borderColor};
    color: whitesmoke;

    option {
      padding: 0.6rem;
    }
    &:hover,
    &:focus {
      outline: none;
      border: 1px solid ${dashbordbgColor};
    }
  }
`;
