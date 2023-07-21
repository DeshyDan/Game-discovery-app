import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, {Platform} from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform:Platform|null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatform();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name :'Platform'}
            </MenuButton>
            <MenuList>
                {data.map((plaform) => (
                    <MenuItem
                        onClick={() => onSelectPlatform(plaform)}
                        key={plaform.id}
                    >
                        {plaform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
