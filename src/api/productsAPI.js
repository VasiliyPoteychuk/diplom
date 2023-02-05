import axios from 'axios';

const url = [
  'https://dummyjson.com/products/',
];

export default {
  getProducts: ()=> axios.get(url + `?limit=100`),
  getProduct: (id)=> axios.get(url + `${id}`),
  searchProduct: (data) => axios.get(url + `search?q=${data}`),
  category: (cat) => axios.get(url + `category/${cat}`)
}