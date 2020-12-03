import axios from 'axios';

const instance = axios.create({
    baseURL: "http://192.168.0.109:9000",
})

export default instance;
