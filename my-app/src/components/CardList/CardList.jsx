import { Card } from '../Card/Card';
import './cardlist.css';

export const CardList = ({ cards, handleProductLike, currentUser }) => {
   return (
      <div className="cards">
         {cards.map((item) => (
            <Card
               {...item}
               key={item._id}
               product={item}
               handleProductLike={handleProductLike}
               currentUser={currentUser}
            />
         ))}
      </div>
   );
};
