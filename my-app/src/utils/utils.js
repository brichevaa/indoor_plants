import { useEffect, useState } from 'react';

export const findLike = (product, currentUser) =>
   product?.likes?.some((el) => el === currentUser._id);

export const useDebounce = (value, delay) => {
   const [debounceValue, setDebounceValue] = useState(value);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setDebounceValue(value);
      }, delay);

      return () => clearTimeout(timeout);
   }, [value]);

   return debounceValue;
};

export const getIssues = (number) => {
   if (number === 1) return ' товар';
   if (number > 1 && number < 5) return ' товара';
   if (number > 4 || !number) return ' товаров';
};
