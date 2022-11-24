import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1/"
});

export const useApi = () => ({
  signin: async (cpf: string, password: string) => {
    const response = await api.post('/auth/signin', { cpf, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  }
});
