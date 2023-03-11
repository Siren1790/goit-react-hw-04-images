import axios from 'axios';

const API_KEY = '32586703-3cda94dac50b012465c4c9243';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`);
  return data;
};
