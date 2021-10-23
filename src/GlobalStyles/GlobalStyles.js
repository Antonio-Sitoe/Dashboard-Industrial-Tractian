import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { backgroundColor, colorWhite, colorWhiteHover } from './Utilits';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Poppins:wght@400;600;700&family=Zen+Kaku+Gothic+Antique&display=swap');

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
