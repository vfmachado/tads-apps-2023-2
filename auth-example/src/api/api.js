
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tads-apps-simle-api.onrender.com'
});

api.interceptors.request.use(
    function (request) {  
        console.log({ 
            url: request.url,
            headers: request.headers 
        })
        return request; 
    }
);


export default api;