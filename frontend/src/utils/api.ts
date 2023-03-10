import axios from "axios"

export default function api(){
    return axios.create({
        baseURL:"http://localhost:2000"
    })
}