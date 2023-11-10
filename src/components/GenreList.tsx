import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const setGenreId = useGameQueryStore((s) => s.setGenreId);
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre: Genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => setGenreId(genre.id)}
                                fontSize="md"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
