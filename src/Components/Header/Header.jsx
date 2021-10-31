import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import {
  backgroundColor,
  bgCard,
  colorWhiteHover,
} from '../../GlobalStyles/Utilits';
import useMedia from '../../Hooks/useMedia';
import Search from '../../Images/search';
import { Title } from '../Users/style';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  position: relative;

  h2 {
    color: ${colorWhiteHover};
    margin-top: 1rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 6rem;
`;

const MobileButton = styled.button`
  position: fixed;
  right: 1rem;
  z-index: 100;
  background: ${backgroundColor};
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    background: ${bgCard};
    color: ${colorWhiteHover};
  }

  &::after {
    content: '';
    display: block;
    width: ${(props) => props.width};
    color: #eee;
    height: ${(props) => props.height};
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
    transform: ${(props) => props.transform};
  }
`;

function Header({ ShowPanel, setShowPanel }) {
  const [activeBtn, setActive] = React.useState(false);
  const [location, setLocation] = React.useState('');
  const { pathname } = useLocation();
  const mobile = useMedia('(max-width:800px)');

  React.useEffect(() => {
    switch (pathname) {
      case '/dashboard/assets':
        setLocation('Assets');
        break;

      case '/dashboard/users':
        setLocation('Users');
        break;

      case '/dashboard/units':
        setLocation('Units');
        break;

      case '/dashboard/company':
        setLocation('Company');
        break;

      default:
        setLocation('Home');
        break;
    }
    if (mobile) setShowPanel(true);
  }, [pathname, mobile]);

  function handleToggle() {
    setShowPanel(!ShowPanel);
    setActive(!activeBtn);
  }
  return (
    <HeaderStyle>
      <Title>{location}</Title>
      <Profile>
        <Search />
        <MobileButton
          onClick={handleToggle}
          height={activeBtn ? '4px' : '2px'}
          width={activeBtn ? '4px' : '1.2rem'}
          transform={activeBtn ? 'rotate(90deg)' : 'initial'}
        />
      </Profile>
    </HeaderStyle>
  );
}

export default Header;
