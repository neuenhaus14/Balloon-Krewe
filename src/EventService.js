import axios from 'axios'


const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World-Vue-3-New-Syntax', 
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

//this is the url of the server
const apiBackend = axios.create({
  baseURL: 'http://localhost:3555/api', 
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(){
    return apiClient.get('/events')
  },

  getEvent(id){
    return apiClient.get('/events/' + id)
  },

  getCat(){
    return apiBackend.get('/cat')
  },

  postContactForm(firstName, lastName, email, message, date){
    return apiBackend.post('/user-input/post-input', {
      data: {firstName,
      lastName,
      email, 
      message,
      date,}
    })
  }
}