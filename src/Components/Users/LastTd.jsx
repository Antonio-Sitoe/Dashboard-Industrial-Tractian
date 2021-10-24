import React from 'react';
import { UserContext } from '../../Context/UserContext';
import useFetch from '../../Hooks/useFetch';
import Points3 from '../../Images/Points3';
import { GET_USER } from '../../Services/Api';

function LastTd({ id }) {
  const { setDataModal } = React.useContext(UserContext);
  const { request } = useFetch();
  async function handleModal(e) {
    const { url, options } = GET_USER(id);
    const { json, response } = await request(url, options);
    if (response.ok) setDataModal(json);
  }
  return (
    <td>
      <Points3 onClick={handleModal} />
    </td>
  );
}

export default LastTd;
