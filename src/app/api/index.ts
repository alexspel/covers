import axios from 'axios';

const isDev = true;

const API = {
    baseUrl: isDev ? 'http://localhost:3001' : '',
    get: async (query: string[]) => {
        const result = await axios.get([API.baseUrl, ...query].join('/'));
        return result.data;
    },
};

export default API;
