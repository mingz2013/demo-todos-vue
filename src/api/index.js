import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:8080/todos/'
})

export default instance
