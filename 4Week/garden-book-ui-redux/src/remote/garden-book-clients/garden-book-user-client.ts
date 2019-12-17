import axios from 'axios'
import { environment } from '../../environment'


export const gbUserClient = axios.create({
    baseURL: environment.baseUrl, //generally just network address
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})