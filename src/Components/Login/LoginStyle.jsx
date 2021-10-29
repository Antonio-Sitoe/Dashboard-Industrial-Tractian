import styled from 'styled-components';
import { backgroundColor } from '../../GlobalStyles/Utilits';

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 550px;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LoginLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContentLogin = styled.div`
  background: white;
  padding: 2rem 5rem;
  @media (max-width: 900px) {
    padding: 2rem 8rem;
  }
  @media (max-width: 600px) {
    padding: 2rem;
  }
`;
export const LoginDefaultstyle = styled.form`
  display: grid;
  gap: 1rem;

  button {
    padding: 0.8rem;
    border: none;
    background: ${backgroundColor};
    color: white;
    border-radius: 0.3rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const SignUpstyle = styled.form`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;

  p {
    color: #252525;
  }
  a {
    text-align: center;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #252525;
  position: relative;
  margin-bottom: 1rem;

  &::before {
    content: '';
    width: 2.5rem;
    border-radius: 0.3rem;
    height: 6px;
    position: absolute;
    display: block;
    bottom: -6px;
    left: 0;
    background: #d4d3d3;
  }
`;

export const Advice = styled.p`
  color: #c2bdbd;
  margin-top: 2rem;
  text-align: center;
`;

export const Message = styled.p`
  color: #64af64;
`;
