import axios from "axios"

export const api = axios.create({
  baseURL: "https://newrocketnotes.netlify.app/",
  // baseURL: import.meta.env.VITE_API_HOST,
})
