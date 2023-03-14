import React from 'react';
import './card.css';
import { ReactComponent as Like } from './like.svg';

export const Card = ({
   product,
   pictures,
   name,
   price,
   discount,
   handleProductLike,
   currentUser,
}) => {
   const isLiked = product.likes.some((el) => el === currentUser._id);
   const handleLikeClick = () => {
      handleProductLike(product);
   };
   return (
      <div className="card">
         <div className="card__sticky card__sticky_top-left">
            {!!discount && <span className="card__discount">{discount}%</span>}
         </div>
         <div className="card__sticky card__sticky_top-right">
            <button
               className={`card__favorite ${
                  isLiked
                     ? 'card__favorite_active'
                     : 'card__favorite_active-none'
               }`}
               onClick={handleLikeClick}
            >
               <Like className="card__liked" />
            </button>
         </div>
         <a href="/" className="card__link">
            <img src={pictures} alt="карточка товара" className="card__image" />
            <div className="card__description">
               <span className="card__name">{name}</span>
               {/* <span className="card__wight">1 шт</span> */}
               <p className="card__price">{price} руб.</p>
            </div>
         </a>
         <span className="btn btn_type_primary ">В корзину</span>
      </div>
   );
};
