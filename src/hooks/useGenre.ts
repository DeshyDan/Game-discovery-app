import genres from "../data/genres";
import { CACHE_KEY_GENRE } from "../data/constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const useGenres = () => {
    // const { data, ...rest } =
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRE,
        queryFn: () =>
            apiClient
                .get<FetchResponse<Genre>>("/genres")
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres },
    });
};

export default useGenres;
