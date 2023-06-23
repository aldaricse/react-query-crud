import axios from 'axios'

const BASE_URL = import.meta.env.VITE_URL_API

export default axios.create({
  baseURL: BASE_URL
})