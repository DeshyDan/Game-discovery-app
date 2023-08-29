import axios, { AxiosRequestConfig } from "axios";

import apiKey from "./config";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
const apiInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: apiKey,
    },
});
class APIClient<T> {
    constructor(private endpoint: string) {}

    getAll(config?: AxiosRequestConfig) {
        return apiInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    }
}

export default APIClient;
