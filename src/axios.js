import axios from "axios"; 

const instance = axios.create({
    baseURL: '...'  //API URL goes here 
})

export default instance;