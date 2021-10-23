import styled from 'styled-components';
import { AnimeLeft } from '../../GlobalStyles/GlobalStyles';
import { bgCard, colorWhite } from '../../GlobalStyles/Utilits';

export const SectionUser = styled.section`
  animation: ${AnimeLeft} .3s;
`

export const Card = styled.div`
  padding: 1rem;
  border-radius: 0.3rem;
  background: ${bgCard};
  color: ${colorWhite};
  font-family: 'Poppins', sans-serif;
`;

export const Table = styled.table`
  padding: 1rem 2rem;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    overflow-x: scroll;
  }
`;

export const Theader = styled.thead`
  text-align: left;

  tr {
    th {
      border-bottom: 1px solid ${colorWhite};
      padding-bottom: 1rem;
    }
  }
`;

export const Tbody = styled.tbody`
  td {
    border-bottom: 1px solid ${colorWhite};
    padding: 1rem 0;

    /* &:last-child {
      text-align: center;
    } */
  }
`;

export const UserList = styled.h2`
  margin-bottom: 1rem;
  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 2px;
    background: currentColor;
  } 

`;
