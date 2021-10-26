import React from 'react';
import styled, { keyframes } from 'styled-components';
import { backgroundColor, bgCard } from '../../GlobalStyles/Utilits';

const Wrapper = styled.div`
  display: grid;
`;
const Img = styled.img`
  display: block;
  max-width: 100%;
  opacity: 0;
  transition: 0.2s;
  grid-area: 1/1;
  margin: 0;
  padding: 0;

  height: ${(props) => props.height};
  border-radius: 0.3rem;

`;

const Animeskeleton = keyframes`
    from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;
const Skeleton = styled.div`
  grid-area: 1/1;
  border-radius: 0.3rem;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    ${bgCard} 0px,
    ${backgroundColor} 50%,
    ${bgCard} 100%
  );
  background-color: ${bgCard};
  background-size: 200%;
  animation: ${Animeskeleton} 1.5s infinite linear;
`;

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton />}
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
