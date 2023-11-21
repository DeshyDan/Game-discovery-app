import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: () => apiClient.getAll(),
        staleTime: ms("24h"),
        initialData: platforms,
    });
};

export default usePlatforms;
