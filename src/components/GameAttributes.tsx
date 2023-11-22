import { SimpleGrid, Text } from "@chakra-ui/react";
import  Game  from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Prop {
    game: Game;
}

const GameAttributes = ({ game }: Prop) => {
    return (
        <>
        <SimpleGrid columns={2} as='dl'>
              <DefinitionItem term="Plaforms">
                {game.parent_platforms?.map(({ platform }) => (
                    <Text key={platform.name}>{platform.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Metascore">
                <CriticScore score={game.metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                {game.genres.map((genre) => (
                    <Text key={genre.id}>{genre.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Publishers">
                {game.publishers?.map((publisher) => (
                    <Text key={publisher.id}>{publisher.name}</Text>
                ))}
            </DefinitionItem>  
                </SimpleGrid>
            
        </>
    );
};

export default GameAttributes;
