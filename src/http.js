import axios from 'axios'

const http = axios.create({
    // baseURL: 'http://fandian.pythonanywhere.com'
    baseURL: 'https://ancient-citadel-19042.herokuapp.com/'
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = 'Token' + localStorage.token
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default http