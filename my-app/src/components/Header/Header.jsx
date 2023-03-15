import React from 'react';
import { Logo } from './Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search } from './Search/Search';
import './header.css';
import { Icons } from './Icons/Icons';
import { Button } from '@mui/material';
import { FloatButton } from 'antd';

export const Header = ({ setSearchQuery, user }) => {
   return (
      <div className="header">
         <div className="container">
            <div className="header__wrapper">
               <div className="header__item">
                  <Logo />
                  <button className="btn btn_type_primary">Каталог</button>
                  <Search setSearchQuery={setSearchQuery} />
                  <p>
                     {user.name} {user.about}
                  </p>
                  <div className="header__right">
                     <Icons />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
