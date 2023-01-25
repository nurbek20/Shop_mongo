import axios from 'axios';

const instance=axios.create({
    headers:{
        'Content-Type':'application/json'
    },
    baseURL:'http://localhost:5555/api/auth/'
})

export default instance;