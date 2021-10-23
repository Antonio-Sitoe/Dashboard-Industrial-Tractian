import React from 'react';
import { Dash, Painel, LogoDiv, Ul } from './Style';
import Logo from '../../Images/Logo';
import { Link } from 'react-router-dom';
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
              <Link to=''>
                <HomeIcon />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='assets'>
                <AssetsIcons />
                <span>Assets</span>
              </Link>
            </li>
            <li>
              <Link to='users'>
                <UserIcon />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to='units'>
                <Unit />
                <span>Units</span>
              </Link>
            </li>
            <li>
              <Link to='company'>
                <CompanyIcons />

                <span>Company</span>
              </Link>
            </li>
          </Ul>
        </nav>
      </Dash>
    </Painel>
  );
}

export default Panel;
