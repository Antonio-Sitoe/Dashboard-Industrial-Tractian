import React from 'react';
import { Table, Tbody, Theader } from '../Users/style';
import { ResponsibilityTable, StatusColor } from './HomeStyle';

function Tables({ data }) {
  function veryFyStatus(status) {
    let color;
    switch (status) {
      case 'inAlert':
        color = '#db303f';
        break;
      case 'inDowntime':
        color = '#DB8C28';
        break;

      default:
        color = '#45C86D';
        break;
    }
    return <StatusColor color={color}>{status}</StatusColor>;
  }
  return (
    <ResponsibilityTable>
      <Table>
        <Theader>
          <tr>
            <th>Assets</th>
            <th>Status</th>
            <th>Responsible</th>
          </tr>
        </Theader>
        <Tbody>
          {data.map((item, index) => {
            if (index < 3)
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{veryFyStatus(item.status)}</td>
                  <td>{item.response}</td>
                </tr>
              );
            return null;
          })}
        </Tbody>
      </Table>
    </ResponsibilityTable>
  );
}

export default Tables;
