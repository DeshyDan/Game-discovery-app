import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";
import { CACHE_KEY_GAMES } from "../data/constants";
import APIClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                },
            }),
    });
};

export default useGames;
