import React from 'react';
import useFetch from '../Hooks/useFetch';
import { GET_ASSETS, GET_USERS } from '../Services/Api';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const { request, loading, error } = useFetch();
  const [machineName, setMachineName] = React.useState([]);
  const [responsable, setResponsable] = React.useState([]);

  React.useEffect(() => {
    async function GetData() {
      const userUrl = GET_USERS();
      const assetsUrl = GET_ASSETS();
      const UserData = await request(userUrl.url, userUrl.options);
      const AssetsData = await request(assetsUrl.url, assetsUrl.options);

      const Responsable = AssetsData.json.map((item, index) => {
        if (UserData.json[index]) item.response = [UserData.json[index].name];
        else item.response = [];
        return item;
      });
      setData(Responsable);
    }

    let amount = true;
    if (amount) GetData();

    return () => (amount = false);
  }, []);
  const value = {
    data,
    setData,
    loading,
    error,
    machineName,
    setMachineName,
    responsable,
    setResponsable,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
