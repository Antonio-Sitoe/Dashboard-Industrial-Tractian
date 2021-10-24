import React from 'react';
import { UserContext } from '../../Context/UserContext';
import useFetch from '../../Hooks/useFetch';
import { GET_UNIT, GET_USERS } from '../../Services/Api';
import Loading from '../Helper/Loading';
import Modal from '../Modal/Modal';
import LastTd from './LastTd';
import { Card, Table, Theader, Title, Tbody, SectionUser } from './style';

function Users() {
  const { dataModal } = React.useContext(UserContext);
  const { error, request, loading } = useFetch();
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

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );
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
                      <LastTd id={id} />
                    </tr>
                  );
                })}
              </Tbody>
            </Table>
          </Card>
          <Modal dataModal={dataModal} users={users} error={error} loading={loading} />
        </SectionUser>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default Users;
