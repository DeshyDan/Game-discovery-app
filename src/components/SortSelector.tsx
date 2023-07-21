import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, {Platform} from "../hooks/usePlatform";

// interface Props {
//     onSelectPlatform: (platform: Platform) => void;
//     selectedPlatform:Platform|null;
// }
const SortSelector = () => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by :Relavance
            </MenuButton>
            <MenuList>
               <MenuItem>dfs</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;