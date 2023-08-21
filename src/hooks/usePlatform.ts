import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>("/platforms/lists/parents")
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 100,
        initialData: { count: platforms.length, results: platforms },
    });
};

export default usePlatform;
