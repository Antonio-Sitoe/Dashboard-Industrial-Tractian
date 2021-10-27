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

export const TextArea = styled.textarea`
  border: 1px solid #e4e3e3;
  background: #f5f5f5;
  padding: 1rem;
  width: 100%;
  max-width: 100%;

  &:disabled {
    background: grey;
  }

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid gray;
  }
`;
