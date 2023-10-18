import axios from "axios";

export function retriveHelloWorld() {
    return axios.get('http://localhost:8080/hello')
}