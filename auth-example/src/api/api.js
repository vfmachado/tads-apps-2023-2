
import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://localhost:3000'
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