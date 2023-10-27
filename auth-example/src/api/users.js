import api from "./api";

// Array<User> 
// User {
//     email,
//     password
// }
export const fetchUsers = async () => {
    const response = await api.get('/users');
    return response.data;
}