import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

const SortSelector = () => {
    const sortOrders = [
        { value: "", label: "Relavance" },
        { value: "-added ", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
    const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by :{!sortOrder ? "Relavance" : sortOrder}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        onClick={() => setSortOrder(order.value)}
                        key={order.value}
                        value={order.value}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
