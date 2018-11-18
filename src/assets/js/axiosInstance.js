// Creating an instance of axios with baseURL of our server
import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default instanceAxios
