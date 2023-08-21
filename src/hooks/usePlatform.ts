import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents")

const usePlatform = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: () =>
           apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 100,
        initialData: { count: platforms.length, results: platforms },
    });
};

export default usePlatform;
