import React from 'react';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [dataModal, setDataModal] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const value = { dataModal, setDataModal, openModal, setOpenModal };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
