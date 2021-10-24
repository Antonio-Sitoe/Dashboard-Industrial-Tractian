import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  backgroundColor,
  colorWhite,
  colorWhiteHover,
  dashbordbgColor,
} from './Utilits';

export const GlobalStyle = createGlobalStyle`
html, body, h1, h2, h3, h4, h5, h6, p, ul, li, a, button, input{
  margin: 0;
  padding:0;
}
* {
  box-sizing: border-box;
}
body {
 font-family: 'Zen Kaku Gothic Antique', sans-serif;

}
img {
  width:100%;
  display: block;
}
a {
text-decoration: none;
}
ul, li {
  list-style: none;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.125rem;
}
p {
  font-size: 0.87rem;
  color: ${colorWhiteHover};
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

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: ${(props) => props.mobile};
  gap: 1rem;
  background: ${backgroundColor};
`;

export const AnimeLeft = keyframes`
  
  from {
    opacity:0;
    transform:translateX(-30px)
  }
  
  to {
    opacity:1;
    transform:translateX(0)
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 3rem;
  background: ${dashbordbgColor};
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Rotate = keyframes`
  to {
    transform: rotate(360deg)
  }
`;
export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.2rem solid white;
  border-radius: 50%;
  border-right-color: transparent;
  animation: 1s ${Rotate} infinite;
`;
