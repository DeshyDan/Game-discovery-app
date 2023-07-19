import axios from "axios";
import apiKey from "./config";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: apiKey
    }

})