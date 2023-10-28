import { CACHE_KEY_GENRE } from "../data/constants";
import genres from "../data/genres";

import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
    // const { data, ...rest } =
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRE,
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: genres
    });
};

export default useGenres;
