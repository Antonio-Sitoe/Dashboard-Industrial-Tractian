import React from 'react';
import { Dash, Painel, LogoDiv, Ul } from './Style';
import Logo from '../../Images/Logo';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../Images/HomeIcon';
import AssetsIcons from '../../Images/AssetsIcons';
import UserIcon from '../../Images/UserIcon';
import Unit from '../../Images/unit';
import CompanyIcons from '../../Images/CompanyIcons';
function Panel({ ShowPanel }) {
  return (
    <Painel display={ShowPanel ? 'none' : 'block'}>
      <Dash>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <nav>
          <Ul>
            <li>
              <NavLink to='' end>
                <HomeIcon />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='assets'>
                <AssetsIcons />
                <span>Assets</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='users'>
                <UserIcon />
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='units'>
                <Unit />
                <span>Units</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='company'>
                <CompanyIcons />
                <span>Company</span>
              </NavLink>
            </li>
          </Ul>
        </nav>
      </Dash>
    </Painel>
  );
}

export default Panel;
