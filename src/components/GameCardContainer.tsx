import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Prop {
    children: ReactNode;
}
const GameCardContainer = ({ children }: Prop) => {
    return (
        <Box width={300} border={10} overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;
