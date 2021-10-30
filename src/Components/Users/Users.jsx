import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { GET_UNIT, GET_USERS } from '../../Services/Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { Card, Table, Theader, Title, Tbody, SectionUser } from './style';

function Users() {
  const { error, request } = useFetch();
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    async function FetchUsers() {
      const { url, options } = GET_USERS();
      const { json, response } = await request(url, options);
      if (response.ok) {
        const unit = json.map(({ unitId }) => {
          return GET_UNIT(unitId);
        });

        const allPromise = await Promise.all(unit);
        const CleanPromise = allPromise.map((response) => response.json());
        const dataFetching = await Promise.all(CleanPromise);
        const reducer = json.map((item, index) => {
          item.unitId = dataFetching[index].name;
          return item;
        });
        setUsers(reducer);
      }
    }
    let isAmounted = true;
    if (isAmounted) FetchUsers();
    return () => (isAmounted = false);
  }, []);

  if (error) return <Error error={error} />;
  return (
    <>
      {users ? (
        <SectionUser>
          <Card>
            <Title>Users List</Title>
            <Table>
              <Theader>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Units</th>
                  <th>Actions</th>
                </tr>
              </Theader>
              <Tbody>
                {users.map(({ id, email, name, unitId }) => {
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{unitId}</td>
                      <td>
                        <Link to={`edit/${id}`}>* * *</Link>
                      </td>
                    </tr>
                  );
                })}
              </Tbody>
            </Table>
          </Card>
        </SectionUser>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default Users;
