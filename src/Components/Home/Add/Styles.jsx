import styled from 'styled-components';
import {
  backgroundColor,
  bgCard,
  colorWhiteHover,
  dashbordbgColor,
} from '../../../GlobalStyles/Utilits';

export const HomeAddAssetStyle = styled.main`
  padding: 1rem;
  background: ${bgCard};
  color: white;
  border-radius: 0.3rem;
  max-width: 600px;
  margin: 2rem auto;
`;
export const HomeAddMain = styled.form`
  display: grid;
  gap: 1rem;

  input,
  textarea {
    background: ${backgroundColor};
    border: 1px solid ${colorWhiteHover};
    color: white;

    &:focus,
    &:hover {
      border: 1px solid ${dashbordbgColor};
    }
  }
  div {
    display: grid;
    gap: 0.3rem;
  }

  select {
    padding: 0.6rem;
    background: ${backgroundColor};
    color: white;
  }
`;
