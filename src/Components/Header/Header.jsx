import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.2rem;
`;

function Header({ ShowPanel, setShowPanel }) {
  return (
    <HeaderStyle>
      <button onClick={() => setShowPanel(!ShowPanel)}>sate</button>
    </HeaderStyle>
  );
}

export default Header;
