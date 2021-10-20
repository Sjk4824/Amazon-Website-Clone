import axios from "axios"; 

const instance = axios.create({
    baseURL: 'https://us-central1-clone-de225.cloudfunctions.net/api'
    
    // 'http://localhost:5001/clone-de225/us-central1/api'
})

export default instance;