import axios from "axios"

const api = axios.create({
    baseURL: 'https://js-pi-4sem-api.onrender.com'
})

export default api