import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres, { Genre } from "../hooks/useGenre";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGenres();
    const genre:Genre = genres?.results.find((g:Genre) => g.id === gameQuery.genreId);

    const {data:platforms} = usePlatform();
    const platform:Platform = platforms?.results.find((p:Platform) => p.id == gameQuery.platformId)

    const heading = `${platform?.name || ""} ${
        genre?.name || ""
    } Games`;
    return (
        <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
            {heading}
        </Heading>
    );
};

export default GameHeading;
