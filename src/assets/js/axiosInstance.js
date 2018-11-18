// Creating an instance of axios with baseURL of our server
import axios from "axios";
const instanceAxios = axios.create({
    baseURL: 'http://localhost:3000/'
})
instanceAxios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

export default instanceAxios
