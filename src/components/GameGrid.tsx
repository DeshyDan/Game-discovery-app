import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}
interface FetchGameResponse {
    count: number;
    results: Game[];
}
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGameResponse>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err: AxiosError) => {
                setError(err.message);
            });
    });
    if(error) return <Text>{error}</Text>

    return (
        <>
        
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
