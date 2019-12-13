import axios from 'axios'


export const gbUserClient = axios.create({
    baseURL: 'http://localhost:1001', //generally just network address
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})