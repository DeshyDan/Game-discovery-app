import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GENRE } from "../data/constants";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
    // const { data, ...rest } =
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRE,
        queryFn: () => apiClient.getAll(),
        staleTime: ms("24h"),
        initialData: genres,
    });
};

export default useGenres;
