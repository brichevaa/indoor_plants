import React from 'react';
import { Logo } from './Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search } from './Search/Search';
import './header.css';
import { Icons } from './Icons/Icons';

export const Header = ({ setSearchQuery, user }) => {
   return (
      <div className="header">
         <div className="container">
            <div className="header__wrapper">
               <div className="header__item">
                  <Logo />
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
