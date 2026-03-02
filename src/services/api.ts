import axios from 'axios';

const api = axios.create({
  baseURL: 'https://treinamentoapi.codejr.com.br/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;