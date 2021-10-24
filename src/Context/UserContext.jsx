import React from 'react';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [dataModal, setDataModal] = React.useState(null);
  const value = {dataModal, setDataModal};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

 
