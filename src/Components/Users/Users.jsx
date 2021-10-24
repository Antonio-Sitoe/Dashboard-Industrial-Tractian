import react from 'react';
import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Points3 from '../../Images/Points3';
import { GET_UNIT, GET_USERS } from '../../Services/Api';
import { Card, Table, Theader, UserList, Tbody, SectionUser } from './style';

function Users() {
  const { loading, error, request } = useFetch();
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
        const CleanPromise = await allPromise.map((response) =>
          response.json()
        );
        const dataFetching = await Promise.all(CleanPromise);
        const reducer = json.map((item, index) => {
          item.unitId = dataFetching[index].name;
          return item;
        });
        setUsers(reducer);
      }
    }
    FetchUsers();
  }, []);

  return (
    <SectionUser>
      {users && (
        <Card>
          <UserList>Users List</UserList>
          <Table>
            <Theader>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Units</th>
                <th>Action</th>
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
                      <Points3 />
                    </td>
                  </tr>
                );
              })}
            </Tbody>
          </Table>
        </Card>
      )}
    </SectionUser>
  );
}

export default Users;
