import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URl;
const SEARCH_URI = process.env.REACT_APP_API_URL_SEARCH;
const ITEM_DETAIL_URI = process.env.REACT_APP_API_URL_ITEM_DETAIL;

export const getItems = async (search) => {
  if (!search || search.length === 0) {
    return [];
  }

  const url = `${BASE_URL}${SEARCH_URI}?q=${search}`;
  const response = await axios.get(url);
  return response.data;
};

export const getDetail = async (id) => {
  if (!id || id.length === 0) {
    return {};
  }

  const url = `${BASE_URL}${ITEM_DETAIL_URI}/${id}`;
  return axios.get(url);
};
