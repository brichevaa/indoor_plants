import logoFavorite from './favorites.svg';
import logoPath from './path.svg';
import './icons.css';
import { Link } from 'react-router-dom';

export const Icons = () => {
   return (
      <>
         <a href="#" className="header__bubble-link">
            <img src={logoFavorite} alt="лого лайк" className="logo__icons" />
         </a>
         <a href="#" className="header__bubble-link">
            <img src={logoPath} alt="лого корзина" className="logo__icons" />
         </a>
      </>
   );
};
