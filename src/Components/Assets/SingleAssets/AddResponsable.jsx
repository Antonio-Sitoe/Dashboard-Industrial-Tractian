import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { UserContext } from '../../../Context/UserContext';
import { Button, Links } from '../../../GlobalStyles/GlobalStyles';
import {
  backgroundColor,
  bgCard,
  colorWhite,
  dashbordbgColor,
} from '../../../GlobalStyles/Utilits';
import useFetch from '../../../Hooks/useFetch';
import { GET_USERS } from '../../../Services/Api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import { SectionUser, Title } from '../../Users/style';

const Responsable = styled.main`
  margin: 2rem 0;
  color: white;

  ul {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 0 0.6rem;
      background: ${bgCard};
      border: 0.3rem;
      &:hover {
        background: ${backgroundColor};
      }
    }
  }

  div {
    margin-top: 2rem;
  }
`;

const ButtonCheked = styled.button`
  background: ${(props) => props.color};
  border: none;
  color: ${colorWhite};
  cursor: pointer;
  border: 2px solid whitesmoke;
  width: 8rem;
  height: 2.5rem;
  font-weight: bold;
  border-radius: 0.3rem;
`;

function AddResponsable() {
  const { machineName, setResponsable } = React.useContext(UserContext);
  const { request, error } = useFetch();
  const [date, setDate] = React.useState([]);
  const params = useParams();

  function handleChecked(id) {
    const newDate = date.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setDate(newDate);
    const chekedNames = date
      .filter((item) => {
        return item.checked === true;
      })
      .map(({ name }) => name);
    setResponsable([...chekedNames]);
  }

  function handleBack() {}
  React.useEffect(() => {
    async function GetUsers() {
      const { url, options } = GET_USERS();
      const { json, response } = await request(url, options);
      if (response.ok) setDate(json);
    }

    let ammount = true;
    if (ammount) GetUsers();
    return () => (ammount = false);
  }, []);

  if (error) return <Error error={error} />;
  if (date)
    return (
      <SectionUser>
        <Responsable>
          <Title>Add person to asset {machineName}</Title>
          <ul>
            {date.map(({ id, name, checked }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  <ButtonCheked
                    onClick={() => handleChecked(id)}
                    color={checked ? backgroundColor : dashbordbgColor}
                  >
                    {checked ? 'Added' : 'Add'}
                  </ButtonCheked>
                </li>
              );
            })}
          </ul>
          <div>
            <Links to={`/dashboard/assets/${params.id}`}>Save</Links>
          </div>
        </Responsable>
      </SectionUser>
    );
  return <Loading />;
}

export default AddResponsable;
