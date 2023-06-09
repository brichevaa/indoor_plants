const config = {
   baseUrl: 'https://api.react-learning.ru',
   headers: {
      'content-type': 'application/json',
      Authorization:
         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VjZmFmMjU5Yjk4YjAzOGY3N2I2NjAiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc4NDMxNDMxLCJleHAiOjE3MDk5Njc0MzF9.6_ycSRs7ezYOsPSGuMQj7wR-r8XqY7yxYOSRwxswisQ',
      // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
   },
};

const onResponse = (res) => {
   return res.ok ? res.json() : Promise.reject('Error');
};

class Api {
   constructor(data) {
      this._baseUrl = data.baseUrl;
      this._headers = data.headers;
   }
   getProductList() {
      return fetch(`${this._baseUrl}/products`, {
         headers: this._headers,
      }).then((res) => onResponse(res));
   }
   getProductById(id) {
      return fetch(`${this._baseUrl}/products/${id}`, {
         headers: this._headers,
      }).then((res) => onResponse(res));
   }
   addProduct(data) {
      return fetch(`${this._baseUrl}/products`, {
         headers: this._headers,
         method: 'POST',
         body: JSON.stringify(data),
      }).then((res) => onResponse(res));
   }
   getUserInfo() {
      return fetch(`${this._baseUrl}/v2/group-10/users/me`, {
         headers: this._headers,
      }).then((res) => onResponse(res));
   }
   searchProducts(query) {
      return fetch(`${this._baseUrl}/products/search?query=${query}`, {
         headers: this._headers,
      }).then((res) => onResponse(res));
   }
   // like - true / false
   changeLikeProductStatus(productId, like) {
      return fetch(`${this._baseUrl}/products/likes/${productId}`, {
         headers: this._headers,
         method: like ? 'PUT' : 'DELETE',
      }).then((res) => onResponse(res));
   }
   deleteLike(productId) {
      return fetch(`${this._baseUrl}/products/likes/${productId}`, {
         headers: this._headers,
         method: 'DELETE',
      }).then((res) => onResponse(res));
   }
   addLike(productId) {
      return fetch(`${this._baseUrl}/products/likes/${productId}`, {
         headers: this._headers,
         method: 'PUT',
      }).then((res) => onResponse(res));
   }
}

export const api = new Api(config);

// {
//    "title": "Замиакулькас.",
//    "text": "Замиакулькас не требует специфического и сложного ухода, растение крайне неприхотливо и подойдет начинающим цветоводам.",
//    "image": "https://i.pinimg.com/564x/05/f2/b2/05f2b2638f5519acdfc039071ebfaaad.jpg",
//    "tags": ["plant", "zamiokulkas"]
// }

//если классы тяжелы для понимания можно без создания классов:
//  export const func = () => { return fetch().then(onResponse)}

// export const getProductList = () => {
//    return fetch(`${config.baseUrl}/products`,{
//      headers: config.headers,
//    }).then(onResponse);
//  }
//  export const getUserInfo = () => {
//    return fetch(`${config.baseUrl}/users/me`,{
//      headers: config.headers,
//    }).then(onResponse);
//  }
//  export const searchProducts = (query) => {
//    return fetch(`${config.baseUrl}/products/search?query=${query}`,{
//      headers: config.headers,
//    }).then(onResponse);
//  }
//   export const getProductById = (id) => {
//    return fetch(`${config.baseUrl}/products/${id}`,{
//      headers: config.headers,
//    }).then(onResponse);
//   }
