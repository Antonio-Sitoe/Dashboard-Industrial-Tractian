import react from 'react';
import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Points3 from '../../Images/Points3';
import { Card, Table, Theader, UserList, Tbody, SectionUser } from './style';

function Users() {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function FetchUsers() {

      const { json, response } = request(url, options);
    }
    FetchUsers();
  }, [request]);

  
  return (
    <SectionUser>
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
            <tr>
              <td>Dakota Rice</td>
              <td>Niger</td>
              <td>Oud-Turnhout</td>
              <td>
                <Points3 />
              </td>
            </tr>
            <tr>
              <td>Minerva Hooper</td>
              <td>Curaçao</td>
              <td>Sinaai-Waas</td>
              <td>
                {' '}
                <Points3 />
              </td>
            </tr>
            <tr>
              <td>Sage Rodriguez</td>
              <td>Netherlands</td>
              <td>Baileux</td>
              <td>
                {' '}
                <Points3 />
              </td>
            </tr>
            <tr>
              <td>Philip Chaney</td>
              <td>Korea, South</td>
              <td>Overland Park</td>
              <td>
                {' '}
                <Points3 />
              </td>
            </tr>
            <tr>
              <td>Doris Greene</td>
              <td>Malawi</td>
              <td>Feldkirchen in Kärnten</td>
              <td>
                {' '}
                <Points3 />
              </td>
            </tr>
          </Tbody>
        </Table>
      </Card>
    </SectionUser>
  );
}

export default Users;
