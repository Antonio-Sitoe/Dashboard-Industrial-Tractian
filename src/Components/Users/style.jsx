import styled from 'styled-components';
import { AnimeLeft } from '../../GlobalStyles/GlobalStyles';
import {
  bgCard,
  colorWhite,
} from '../../GlobalStyles/Utilits';

export const SectionUser = styled.section`
  animation: ${AnimeLeft} 0.3s;
  margin: 1rem 0;
`;

export const Card = styled.div`
  max-width: 100% ;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
  background: ${bgCard};
  color: ${colorWhite};
  font-family: 'Poppins', sans-serif;
`;

export const Table = styled.table`
  padding: 1rem 2rem;

  width: 100%;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 760px) {
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`;

export const Theader = styled.thead`
  text-align: center;

  tr {
    th {
      border-bottom: 1px solid ${colorWhite};
      padding-bottom: 1rem;
      text-align: center;
    }
  }
`;

export const Tbody = styled.tbody`
  td {
    border-bottom: 1px solid ${colorWhite};
    padding: 1rem 0;
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 2px;
    background: currentColor;
  }
`;
