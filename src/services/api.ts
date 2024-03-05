import axios from 'axios'

export const service = axios.create({
  baseURL: import.meta.env.BR_API_URL,
  headers: {
    Accept: 'application/json, text/plain, */*',
  },
  withCredentials: true,
})
