import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    const setPlatformId = useGameQueryStore((s) => s.setPlatformId)
    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    
    const selectedPlatform = usePlatform(platformId);

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform: Platform) => (
                    <MenuItem
                        onClick={() => setPlatformId(platform.id)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
