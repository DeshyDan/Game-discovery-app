import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../data/constants";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../stores/gameQueryStore";
import { Platform } from "./usePlatforms";
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        getNextPageParam: (lastpage, allPages) => {
            return lastpage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms("24h"),
    });
};

export default useGames;
