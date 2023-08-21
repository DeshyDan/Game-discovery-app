import { useQuery } from "@tanstack/react-query";
import  { FetchResponse } from "./useData";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import apiClient from "../services/api-client";


export interface Platform{
    id:number;
    name:string;
    slug:string
}

const usePlatform = ()=>{

    return useQuery<FetchResponse<Platform>, Error>({
        queryKey:CACHE_KEY_PLATFORM, 
        queryFn: ()=> apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then(res => res.data)
    })
}

export default usePlatform;