import styled from 'styled-components';
import { AnimeLeft } from '../../GlobalStyles/GlobalStyles';
import { colorWhiteHover } from '../../GlobalStyles/Utilits';

export const ModalBg = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;
  padding: 0.3rem;
`;

export const ModalContent = styled.form`
  max-width: 30rem;
  width: 100%;
  padding: 2rem 1rem;
  background: ${colorWhiteHover};
  border-radius: 0.3rem;
  position: relative;
  animation: 0.3s ${AnimeLeft};
`;
export const CLose = styled.span`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 3rem;
  background: tomato;
  color: white;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
`;
