import './search.css';

export const Search = ({ setSearchQuery }) => {
   return (
      <input
         type="text"
         className="search__input"
         placeholder="Поиск по сайту"
         onChange={(e) => setSearchQuery(e.target.value)}
      />
   );
};
