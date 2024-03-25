import axios from 'axios';

const BaseUrl = "http://localhost:3005/post"

const endPoints = {
    ALL_POSTS: '/all',
    ADD_POST: '/post/add'
}

const axiosInstance = axios.create({
    baseURL: BaseUrl  
});

export { axiosInstance, endPoints };