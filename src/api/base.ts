import axios from 'axios'

// const apiBaseUrl = 'https://chat-demo-4fz7.onrender.com/'
// const apiBaseUrl = 'http://localhost:5500/'
const apiBaseUrl = 'https://212.86.108.155'

const apiInstance = axios.create({
	baseURL: apiBaseUrl,
})

export { apiInstance, apiBaseUrl }
