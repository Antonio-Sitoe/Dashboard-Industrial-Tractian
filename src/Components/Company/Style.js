import styled from 'styled-components';

export const Main = styled.main`
  max-width: 55rem;
  margin: 2rem auto;

  p,
  h4 {
    margin-top: 0.6rem;
    line-height: 1.8;
  }
`;
export const Img = styled.img`
  height: 25rem;
  border-radius: 0.3rem;

  @media(max-width:400px){
    height: 15rem;
  }
`;
