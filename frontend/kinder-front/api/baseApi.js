import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8080/api/kinderfit"
    // baseURL:"https://digitvl.live/api/v1"
    // baseURL:"https://96db-119-63-138-150.ngrok.io/api/v1"
});