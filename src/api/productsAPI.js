import axios from 'axios';

const url = [
  'https://dummyjson.com/',
];

export default {
  getProducts: ()=> axios.get(url + `products/?limit=100`),
  getProduct: (id)=> axios.get(url + `products/${id}`),
  category: (cat) => axios.get(url + `products/category/${cat}`),
  register: (payload) => axios.post(url + `users/add`, payload),
  login: (payload) => axios.post(url + 'logIn', payload), 
}