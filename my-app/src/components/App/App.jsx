import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import data from '../../data/data.json';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css';
import { api } from '../../utils/api';
import { getIssues, useDebounce } from '../../utils/utils';

// {
//    "title": "Замиакулькас.",
//    "text": "Замиокулькас не требует специфического и сложного ухода, растение крайне неприхотливо и подойдет начинающим цветоводам.",
//    "image": "https://i.pinimg.com/564x/05/f2/b2/05f2b2638f5519acdfc039071ebfaaad.jpg",
//    "tags": ["plant", "zamiokulkas"]
// }

function App() {
   const [cards, setCards] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [currentUser, setCurrentUser] = useState({});

   const filteredCards = (products, id) => {
      return products.filter((e) => e.author._id === id);
   };

   function handleProductLike(product) {
      const isLiked = product.likes.some((el) => el === currentUser._id);
      isLiked
         ? api.deleteLike(product._id).then((newCard) => {
              const newCards = cards.map((e) =>
                 e._id === newCard._id ? newCard : e
              );
              setCards(filteredCards(newCards, currentUser._id));
              console.log(newCard);
           })
         : api.addLike(product._id).then((newCard) => {
              const newCards = cards.map((e) =>
                 e._id === newCard._id ? newCard : e
              );
              setCards(filteredCards(newCards.products, currentUser._id));
              console.log(newCard);
           });
   }

   const debounceValueInApp = useDebounce(searchQuery, 500);

   const handleSearch = (search) => {
      api.searchProducts(search).then((data) =>
         setCards(filteredCards(data, currentUser._id))
      );
   };

   useEffect(() => {
      handleSearch(debounceValueInApp);
   }, [debounceValueInApp]);

   //Рендер товаров может зависеть от прав пользователя. Необходимо,чтобы данные приходили одновременно. Для этого используем Promise.all
   useEffect(() => {
      Promise.all([api.getUserInfo(), api.getProductList()]).then(
         ([userData, productData]) => {
            //сетим юзера
            setCurrentUser(userData);
            const items = filteredCards(productData.products, userData._id);
            setCards(items);
            console.log(items);

            // const fav = items.filter((e) => findLike(e, userData));
            // console.log(fav);
            // setFavorites(fav);
         }
      );
   }, []);

   return (
      <>
         <Header setSearchQuery={setSearchQuery} user={currentUser} />

         <main className="content container">
            {searchQuery && (
               <p>
                  По запросу <b>{searchQuery}</b> найдено {cards.length}{' '}
                  {getIssues(cards.length)}
               </p>
            )}
            <CardList
               handleProductLike={handleProductLike}
               cards={cards}
               currentUser={currentUser}
            />
         </main>
         <Footer />
      </>
   );
}

export default App;
